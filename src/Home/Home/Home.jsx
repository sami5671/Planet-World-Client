import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import WhoWeAre from "./WhoWeAre";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Plant World || Home</title>
      </Helmet>
      <Banner></Banner>
      <WhoWeAre></WhoWeAre>
    </div>
  );
};

export default Home;
