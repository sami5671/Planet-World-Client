import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import {
  FaCcDiscover,
  FaCcJcb,
  FaCcMastercard,
  FaCcVisa,
} from "react-icons/fa6";
import { GiPayMoney } from "react-icons/gi";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
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
            <div className="border-2 bg-white rounded-lg px-2 py-8 lg:w-[705px] h-[100px]">
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
            </div>
          </div>

          <div className="mt-12 lg:ml-12 flex items-center justify-end">
            <button
              className="bg-white mb-44 text-black font-bold py-2 px-6 rounded-md transition duration-300 ease-in-out hover:bg-lime-400 hover:text-white"
              type="submit"
              disabled={!stripe}
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
