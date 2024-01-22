import { FaUsers } from "react-icons/fa";

const SectionTitlleUser = ({ heading }) => {
  return (
    <div className="mx-auto text-center font-Rancho md: w-4/12 my-8">
      <FaUsers className="mx-auto text-2xl lg:text-5xl text-white" />
      <p className="lg:text-3xl text-white uppercase py-2">{heading}</p>
    </div>
  );
};

export default SectionTitlleUser;
