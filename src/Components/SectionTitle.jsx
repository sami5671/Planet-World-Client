import { GiVikingChurch } from "react-icons/gi";

const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="mx-auto text-center font-Rancho md: w-4/12 my-8">
      <GiVikingChurch className="mx-auto text-2xl text-orange-300" />
      <p className="text-orange-300 mb-2">-----{subHeading}-----</p>
      <p className="text-3xl text-amber-400 uppercase border-y-2 border-orange-200 py-2">
        {heading}
      </p>
    </div>
  );
};

export default SectionTitle;
