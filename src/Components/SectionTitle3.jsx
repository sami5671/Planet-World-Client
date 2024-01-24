import { IoMdTrendingUp } from "react-icons/io";

const SectionTitle3 = ({ heading }) => {
  return (
    <div className="mx-auto text-center font-Rancho md: w-4/12 my-8">
      <IoMdTrendingUp className="mx-auto lg:text-5xl text-white" />
      <p className="lg:text-3xl text-white uppercase py-2">{heading}</p>
    </div>
  );
};

export default SectionTitle3;
