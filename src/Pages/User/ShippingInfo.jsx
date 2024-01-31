import { BsArrowUpRightSquareFill } from "react-icons/bs";
import SectionTitle7 from "./../../Components/SectionTitle7";
import { FcProcess } from "react-icons/fc";
import { MdLocalShipping } from "react-icons/md";
import { LuPackageOpen } from "react-icons/lu";

const ShippingInfo = () => {
  return (
    <>
      <section className="bg-slate-900">
        <div>
          <h1 className="mb-20">hello</h1>
        </div>
        <SectionTitle7 heading={"Shipping Info"}></SectionTitle7>

        <div className="px-2 lg:px-24">
          <h1 className="text-white font-bold mb-8 lg:text-3xl">
            Shipping Track:
          </h1>
        </div>
        <div className="text-white lg:w-full px-2 lg:px-24">
          <div className="bg-white h-[10px] w-full rounded-md"></div>
          {/* processing */}
          <div>
            <p className="-mt-3 lg:-mt-4">
              <FcProcess className="lg:text-2xl bg-white rounded-md" />
            </p>
            <p className="-mt-5 lg:-mt-8">
              <MdLocalShipping className="text-3xl lg:text-5xl text-lime-400 rounded-md" />
              <p className="font-bold text-[10px] lg:text-xl">Processing</p>
            </p>
          </div>
          {/* processing */}
        </div>
        {/* packing */}
        <div className="absolute ml-[75px] lg:ml-[300px] text-white">
          <p className="-mt-10 lg:-mt-[68px]">
            <LuPackageOpen className="lg:text-2xl bg-white text-black rounded-md" />
          </p>
          {/* <p className="-mt-5 lg:-mt-8">
            <MdLocalShipping className="text-3xl lg:text-5xl text-lime-400 rounded-md" />
            <p className="font-bold text-[10px] lg:text-xl">Packing</p>
          </p> */}
        </div>
        {/* packing */}

        <div className="mt-12">hello</div>
      </section>
    </>
  );
};

export default ShippingInfo;
