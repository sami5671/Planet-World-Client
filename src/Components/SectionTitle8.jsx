import { FaCcVisa } from "react-icons/fa";

const SectionTitle8 = ({ heading }) => {
  return (
    <div className="mx-auto text-center font-Rancho md: w-4/12 my-8">
      <FaCcVisa className="mx-auto text-3xl lg:text-5xl text-white" />
      <p className="text-2xl lg:text-3xl text-white uppercase py-2">
        {heading}
      </p>
    </div>
  );
};

export default SectionTitle8;
