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
          <h1 className="text-white font-bold mb-16 lg:text-3xl">
            Shipping Track:
          </h1>
        </div>
        <div className="text-white lg:w-full px-2 lg:px-24">
          <div className="bg-white h-[10px] w-full rounded-md"></div>

          {/* processing */}

          <div>
            <p className="">
              <p className="font-bold text-[10px] lg:text-xl flex items-center gap-1 lg:gap-2">
                <FcProcess className="lg:text-2xl bg-white rounded-md" />
                Processing
              </p>
            </p>
            <p className="absolute -mt-12 lg:-mt-[75px]">
              <MdLocalShipping className="text-3xl lg:text-5xl text-lime-400 rounded-md" />
            </p>
          </div>
          {/* processing */}
        </div>
        {/* packing */}
        <div className="ml-[78px] lg:ml-[380px] -mt-[15px] lg:-mt-[28px]">
          <p className="">
            <p className="text-white font-bold text-[10px] lg:text-xl flex items-center gap-2">
              <LuPackageOpen className="lg:text-2xl bg-white text-black rounded-md " />
              Packing
            </p>
          </p>
          <p className="absolute -mt-12 lg:-mt-[75px]">
            <MdLocalShipping className="text-3xl lg:text-5xl text-lime-400 rounded-md" />
          </p>
        </div>
        {/* packing */}
        {/* shipping */}
        <div className="ml-[78px] lg:ml-[380px] -mt-[15px] lg:-mt-[28px]">
          <p className="">
            <p className="text-white font-bold text-[10px] lg:text-xl flex items-center gap-2">
              <LuPackageOpen className="lg:text-2xl bg-white text-black rounded-md " />
              Packing
            </p>
          </p>
          <p className="absolute -mt-12 lg:-mt-[75px]">
            <MdLocalShipping className="text-3xl lg:text-5xl text-lime-400 rounded-md" />
          </p>
        </div>
        {/* shipping */}

        <div className="mt-12">hello</div>
      </section>
    </>
  );
};

export default ShippingInfo;
