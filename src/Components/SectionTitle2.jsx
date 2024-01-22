import { PiTreePalmFill } from "react-icons/pi";

const SectionTitle2 = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center font-Rancho md: w-4/12 my-8">
      <PiTreePalmFill className="mx-auto lg:text-5xl text-white" />
      <p className="lg:text-3xl text-white uppercase py-2">{heading}</p>
    </div>
  );
};

export default SectionTitle2;
