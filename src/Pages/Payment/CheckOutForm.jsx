import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import {
  FaCcDiscover,
  FaCcJcb,
  FaCcMastercard,
  FaCcVisa,
} from "react-icons/fa6";
import { GiPayMoney } from "react-icons/gi";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import UseCart from "../../Hooks/UseCart";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [cart] = UseCart();
  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();
  const [error, setError] = useState();
  const [clientSecret, setClientSecret] = useState(" ");
  const [transactionId, setTransactionId] = useState(" ");
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  let totalPrice = 0;

  cart.forEach((item) => {
    totalPrice += parseFloat(item.newPrice);
  });

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: totalPrice })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // ----------------------------------------------------------------
    const form = event.target;
    const billingAddress = form.billingAddress.value;
    const shippingAddress = form.shippingAddress.value;
    const phone = form.phone.value;
    // ----------------------------------------------------------------

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("Payment error", error);
      setError(error.message);
    } else {
      console.log("Payment Method", paymentMethod);
      setError(" ");
    }

    // confirm payment

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Anonymous",
            email: user?.email || "Anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction Id: ", paymentIntent.id);
        setTransactionId(paymentIntent.id);
        setPaymentCompleted(true);

        // now save the payment in the database
        const payment = {
          email: user.email,
          name: user.displayName,
          photo: user.photoURL,
          billingAddress: billingAddress,
          shippingAddress: shippingAddress,
          phone: phone,
          transactionId: paymentIntent.id,
          price: totalPrice,
          date: new Date(),
          status: "success",
          cartIds: cart.map((item) => item._id),
          // treeIds: cart.map((item) => item.treeId),
          orderCart: [...cart],
        };
        console.log(payment);
        const res = await axiosSecure.post("/payments", payment);
        console.log("Payment saved: ", res.data);
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thanks for your payment",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    }
    navigate("/dashboard/paymentInfoUser");
  };

  return (
    <section className="flex justify-center items-center">
      <div className="max-w-3xl w-full">
        <div className="mb-4 text-right">
          {/* Added text-right class here */}
          <h1 className="font-bold text-2xl mb-2">Stripe Payment</h1>
          <div className="flex gap-2 text-5xl justify-end">
            <span>
              <FaCcDiscover />
            </span>
            <span>
              <FaCcVisa className="text-blue-400" />
            </span>
            <span>
              <FaCcMastercard className="text-red-700" />
            </span>
            <span>
              <FaCcJcb className="text-cyan-400" />
            </span>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="lg:px-16">
            <div className="border-2 border-lime-700 shadow-md shadow-white bg-white rounded-lg px-2 py-8 lg:w-[705px] h-[350px]">
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "22px",
                      color: "#000",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
              <h1 className="text-lime-600 mt-6 font-bold underline">
                Other Billing Details
              </h1>
              <div className="mt-2 text-lime-900 font-bold">
                <label>Billing Address: </label>
                <input
                  type="text"
                  name="billingAddress"
                  placeholder="Billing Address...."
                  className="border-2 border-lime-700"
                />
                <br />
                <br />
                <label>Delivery Address: </label>
                <input
                  type="text"
                  name="shippingAddress"
                  placeholder="shippingAddress...."
                  className="border-2 border-lime-700"
                />
                <br />
                <br />

                <label>Customer Phone: </label>
                <input
                  type="phone"
                  name="phone"
                  placeholder="Phone Number...."
                  className="border-2 border-lime-700"
                />
                <div className="lg:ml-12 mt-6 flex items-center justify-end">
                  <h2 className="text-red-500">{error}</h2>
                  <h2 className="">
                    <span className="font-bold text-lime-700">
                      Your TransactionID:
                    </span>
                    <span className="text-purple-600"> {transactionId}</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* -------form ----- */}

          {/* ------------ */}

          {/* form info */}

          {/* form info */}
          <div className="mt-12 lg:ml-12 flex items-center justify-end">
            <button
              className="bg-white mb-44 text-black font-bold py-2 px-6 rounded-md transition duration-300 ease-in-out hover:bg-lime-400 hover:text-white"
              type="submit"
              disabled={!stripe || !clientSecret || paymentCompleted}
            >
              <span className="flex items-center gap-1">
                Pay
                <GiPayMoney className="text-xl" />
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CheckOutForm;
