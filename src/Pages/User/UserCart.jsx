import { Link } from "react-router-dom";
import UseCart from "../../Hooks/UseCart";
import UserCartCard from "./UserCartCard";
import Scrollbars from "react-custom-scrollbars-2";
import { FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";
import { useState } from "react";
import SectionTitle4 from "../../Components/SectionTitle4";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import UseAuth from "../../Hooks/UseAuth";

const UserCart = () => {
  // =================================================================

  const [cart] = UseCart();
  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();
  // console.log(cart);
  let totalPrice = 0;

  cart.forEach((item) => {
    totalPrice += parseFloat(item.newPrice);
  });

  // console.log(totalPrice);

  // const [finalPrice, setFinalPrice] = useState(totalPrice);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // const handleApplyVoucher = (event) => {
  //   const code = document.getElementById("voucherInput").value;
  //   if (code === "R45") {
  //     const newFinalPrice = Number(totalPrice) - 5;
  //     setFinalPrice(newFinalPrice);
  //     setButtonDisabled(true);
  //   } else {
  //     Swal.fire({
  //       title: "Opps Wrong Code Entered",
  //       text: "Wrong Voucher Code",
  //       icon: "question",
  //     });
  //     document.getElementById("voucherInput").value = "";
  //   }
  // };

  // =======================for payment form==========================================
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = async (data) => {
  //   // Handle form submission here

  //   const addOrder = {
  //     name: data.name,
  //     email: user.email,
  //     userPhoto: user.photoURL,
  //     address: data.address,
  //     phone: data.phone,
  //     cart: [...cart],
  //   };
  //   // console.log(addOrder);

  //   const res = await axiosSecure.post("/order", addOrder);
  //   if (res.data.insertedId) {
  //     Swal.fire("The Product has been added successfully");
  //   }
  // You can redirect to the payment page or perform other actions as needed
  // };
  // =================================================================
  return (
    <section className="bg-slate-900 px-4 mt-2 ">
      <div className="mb-24">hello</div>
      <SectionTitle4 heading={"Cart"}></SectionTitle4>
      <Link to="/allProduct">
        <div className="flex gap-2 lg:px-44 text-white items-center hover:underline hover:text-slate-500">
          <FaArrowLeft />
          <p>Continue Order ({cart.length})</p>
        </div>
      </Link>
      <div className="flex flex-col lg:px-44 lg:flex-row mt-1">
        {/* cart items */}
        <div className="bg-white shadow-2xl mb-12 lg:w-[500px] lg:h-[500px]">
          <Scrollbars style={{ width: "100%", height: "480px" }}>
            <div>
              {cart.map((items) => (
                <UserCartCard key={items._id} items={items}></UserCartCard>
              ))}
            </div>
          </Scrollbars>
        </div>
        {/* order Summary */}
        <div className="bg-white mt-4 lg:mt-0 lg:ml-12 lg:w-[350px] rounded-2xl px-2 lg:px-4 text-slate-500 mb-12 py-4">
          <h1 className="text-2xl text-lime-500 font-bold mb-2">
            Order Summary
          </h1>
          <hr />
          <div className="flex justify-between items-center mb-2 ">
            <p>Subtotal ({cart.length} items)</p>
            <span className="text-black font-bold">${totalPrice}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p>Shipping Fee</p>
            <span className="text-black font-bold">$0</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p>Use Voucher code For Discount</p>
            <span className="text-black font-bold">$ -5</span>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:items-center mb-2">
            <div className="lg:flex-grow">
              <input
                type="text"
                id="voucherInput"
                placeholder="Enter Voucher Code R45"
                className="border-2 text-center py-1"
              />
            </div>
            <button
              // onClick={handleApplyVoucher}
              disabled={buttonDisabled}
              className={`${
                buttonDisabled
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-lime-600 hover:bg-lime-400"
              } font-bold transition duration-300 ease-in-out text-white px-4 py-1 rounded-sm`}
            >
              Apply
            </button>
          </div>
          <hr />
          <div className="flex justify-between items-center mt-4 mb-2">
            <p className="text-xl">Total</p>
            <span className="text-orange-500 text-xl">${totalPrice}</span>
          </div>
          <div className="flex justify-between items-center mt-4 mb-2">
            <p className="text-xl">After Discount</p>
            <span className="text-orange-500 text-xl">$ {totalPrice}</span>
          </div>
          {/* ==================user info============ */}
          <hr />
          {/* <div className="mt-2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Enter Name...."
                className="border-2"
              />
              <br />
              <input
                type="text"
                {...register("address", { required: true })}
                placeholder="Address...."
                className="border-2"
              />
              <br />
              <input
                type="text"
                {...register("phone", { required: true })}
                placeholder="Phone Number...."
                className="border-2"
              />
            </form>
          </div> */}

          {/* ======================================= */}
          {cart.length ? (
            <Link to="/dashboard/payment">
              <button
                type="button"
                className="w-full px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-amber-500 bg-amber-400 mt-6 text-white font-bold"
              >
                Proceed To Checkout
              </button>
            </Link>
          ) : (
            <button
              type="button"
              disabled
              className="w-full px-4 py-2 rounded-md transition duration-300 ease-in-out bg-amber-200 mt-6 text-white font-bold"
            >
              Proceed To Checkout
            </button>
          )}

          {/* Add any other order summary details here */}
        </div>
      </div>
    </section>
  );
};

export default UserCart;
