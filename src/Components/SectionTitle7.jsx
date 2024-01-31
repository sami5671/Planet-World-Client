import { MdLocalShipping } from "react-icons/md";

const SectionTitle7 = ({ heading }) => {
  return (
    <div className="mx-auto text-center font-Rancho md: w-4/12 my-8">
      <MdLocalShipping className="mx-auto text-3xl lg:text-5xl text-white" />
      <p className="text-2xl lg:text-3xl text-white uppercase py-2">
        {heading}
      </p>
    </div>
  );
};

export default SectionTitle7;
