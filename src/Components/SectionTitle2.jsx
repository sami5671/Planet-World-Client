import { GiVikingChurch } from "react-icons/gi";

const SectionTitle2 = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center font-Rancho md: w-4/12 my-8">
      <GiVikingChurch className="mx-auto text-3xl text-white" />
      <p className="text-3xl text-white uppercase py-2">{heading}</p>
    </div>
  );
};

export default SectionTitle2;
