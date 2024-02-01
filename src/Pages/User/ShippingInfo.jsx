import SectionTitle7 from "./../../Components/SectionTitle7";
import { FcProcess, FcShipped } from "react-icons/fc";
import {
  MdLocalShipping,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import { LuPackageOpen } from "react-icons/lu";
import { FaHome, FaShippingFast } from "react-icons/fa";
import Scrollbars from "react-custom-scrollbars-2";
import UseShipping from "../../Hooks/UseShipping";
import OrderDetailsCard from "../Admin/OrderDetailsCard";

const ShippingInfo = () => {
  // =================================================================
  const [shipping = []] = UseShipping();

  console.log(shipping);
  // Destructure specific properties from the first item in the array
  const { orderStatus, orderCart } = shipping[0] || {};

  // =================================================================
  return (
    <>
      <section className="bg-slate-900">
        <div>
          <h1 className="mb-20">hello</h1>
        </div>
        <SectionTitle7 heading={"Shipping Info"}></SectionTitle7>

        <div className="px-2 lg:px-24">
          <h1 className="text-white font-bold mb-16 lg:text-3xl">
            Shipping Track:
          </h1>
        </div>
        <div className="text-white lg:w-full px-2 lg:px-44">
          <div className="bg-white h-[10px] w-full rounded-md"></div>
        </div>
        {/* processing */}

        <div className="ml-2 lg:ml-[170px]">
          <p className="">
            <p className="text-white font-bold text-[10px] lg:text-xl flex items-center gap-1 lg:gap-2">
              <FcProcess className="lg:text-2xl bg-white rounded-md" />
              Processing
            </p>
          </p>

          {orderStatus === "processing" ? (
            <p className="absolute -mt-12 lg:-mt-[75px]">
              <MdLocalShipping className="text-3xl lg:text-5xl text-lime-400 rounded-md" />
            </p>
          ) : (
            " "
          )}
        </div>
        {/* processing */}

        {/* packing */}
        <div className="ml-[85px] lg:ml-[440px] -mt-[15px] lg:-mt-[28px]">
          <p className="">
            <p className="text-white font-bold text-[10px] lg:text-xl flex items-center gap-2">
              <LuPackageOpen className="lg:text-2xl bg-white text-black rounded-md " />
              Packing
            </p>
          </p>
          {orderStatus === "packing" ? (
            <p className="absolute -mt-12 lg:-mt-[75px]">
              <MdLocalShipping className="text-3xl lg:text-5xl text-lime-400 rounded-md" />
            </p>
          ) : (
            " "
          )}
        </div>
        {/* packing */}
        {/* shipping */}
        <div className="ml-[160px] lg:ml-[730px] -mt-[15px] lg:-mt-[28px]">
          <p className="">
            <p className="text-white font-bold text-[10px] lg:text-xl flex items-center gap-2">
              <MdLocalShipping className="lg:text-2xl bg-white text-black rounded-md " />
              Shipping
            </p>
          </p>
          {orderStatus === "shipping" ? (
            <p className="absolute -mt-[50px] lg:-mt-[75px]">
              <FaShippingFast className="text-3xl lg:text-5xl text-lime-400 rounded-md" />
            </p>
          ) : (
            " "
          )}
        </div>
        {/* shipping */}
        {/* delivered  */}
        <div className="ml-[245px] lg:ml-[1180px] -mt-[15px] lg:-mt-[28px]">
          <p className="">
            <p className="text-white font-bold text-[10px] lg:text-xl flex items-center gap-2">
              <FaHome className="lg:text-2xl bg-white text-black rounded-md " />
              Delivered
            </p>
          </p>
          {orderStatus === "delivered" ? (
            <p className="absolute -mt-12 lg:-mt-[75px]">
              <FcShipped className="text-3xl lg:text-5xl text-lime-400 rounded-md" />
            </p>
          ) : (
            " "
          )}
        </div>
        {/* delivered */}

        <section className="mt-12 px-2 lg:px-24">
          <div>
            <h1 className="text-white font-bold mb-16 lg:text-3xl flex items-center gap-2">
              Ordered Products
              <MdOutlineProductionQuantityLimits className="lg:text-5xl" />
            </h1>
          </div>
          {/* cart items */}
          <div className="bg-white shadow-2xl lg:w-[500px] lg:h-[395px]">
            <Scrollbars style={{ width: "100%", height: "380px" }}>
              <div>
                {orderCart.map((items) => (
                  <OrderDetailsCard
                    key={items._id}
                    items={items}
                  ></OrderDetailsCard>
                ))}
              </div>
            </Scrollbars>
          </div>
        </section>
        {/* product info */}

        <div className="text-slate-900 mt-12">
          <h1>hello</h1>
        </div>
      </section>
    </>
  );
};

export default ShippingInfo;
