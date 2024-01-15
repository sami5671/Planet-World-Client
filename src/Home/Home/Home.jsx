import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import WhoWeAre from "./WhoWeAre";
import TrendingProduct from "../Trending Products/TrendingProduct";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Plant World || Home</title>
      </Helmet>
      <Banner></Banner>
      <WhoWeAre></WhoWeAre>
      <TrendingProduct></TrendingProduct>
    </div>
  );
};

export default Home;
