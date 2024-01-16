import { Link } from "react-router-dom";
import SectionTitle2 from "../../Components/SectionTitle2";
import UseCart from "../../Hooks/UseCart";
import UserCartCard from "./UserCartCard";
import Scrollbars from "react-custom-scrollbars-2";
import { FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";
import { useState } from "react";

const UserCart = () => {
  const [cart] = UseCart();
  const totalPrice = cart.reduce((total, item) => total + item.newPrice, 0);
  const [finalPrice, setFinalPrice] = useState(totalPrice);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleApplyVoucher = (event) => {
    const code = document.getElementById("voucherInput").value;
    if (code === "R45") {
      const newFinalPrice = Number(totalPrice) - 5;
      setFinalPrice(newFinalPrice);
      setButtonDisabled(true);
    } else {
      Swal.fire({
        title: "Opps Wrong Code Entered",
        text: "Wrong Voucher Code",
        icon: "question",
      });
      document.getElementById("voucherInput").value = "";
    }
  };
  return (
    <section className="lg:ml-24 mt-2">
      <SectionTitle2 heading={"Cart"}></SectionTitle2>
      <Link to="/allProduct">
        <div className="flex gap-2 text-white items-center hover:underline hover:text-slate-500">
          <FaArrowLeft />
          <p>Continue Order</p>
        </div>
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-4">
        {/* cart items */}
        <div className="bg-white shadow-2xl lg:w-[500px] lg:h-[500px]">
          <Scrollbars style={{ width: "100%", height: "480px" }}>
            <div>
              {cart.map((items) => (
                <UserCartCard key={items._id} items={items}></UserCartCard>
              ))}
            </div>
          </Scrollbars>
        </div>

        {/* order Summary */}
        <div className="bg-white mt-4 lg:mt-0 lg:ml-12 lg:w-[350px] rounded-2xl px-4 text-slate-500 mb-12 py-4">
          <h1 className="text-2xl text-lime-500 font-bold mb-2">
            Order Summary
          </h1>
          <hr />
          <div className="flex justify-between items-center mb-2">
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
              onClick={handleApplyVoucher}
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
            <span className="text-orange-500 text-xl">$ {finalPrice}</span>
          </div>
          <button className="w-full px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-amber-500 bg-amber-400 mt-6 text-white font-bold">
            Proceed To Checkout
          </button>
          {/* Add any other order summary details here */}
        </div>
      </div>
    </section>
  );
};

export default UserCart;
