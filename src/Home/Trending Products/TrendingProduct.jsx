import { useEffect, useState } from "react";
import useAxiosPublic from "./../../Hooks/useAxiosPublic";
import TrendingProductCard from "./TrendingProductCard";
import SectionTitle from "../../Components/SectionTitle";
import UseProduct from "../../Hooks/UseProduct";
const TrendingProduct = () => {
  // ----------------------------------------------------------------
  const axiosPublic = useAxiosPublic();
  const [allPlants, setAllPlants] = useState([]);
  useEffect(() => {
    axiosPublic.get("/AllPlants").then((res) => {
      setAllPlants(res.data);
    });
  }, [axiosPublic]);
  // console.log(allPlants);

  // --------------------------Using UseProduct Hook --------------------------------------
  const [products] = UseProduct();
  // console.log(products);

  const trendingProducts = products.filter(
    (product) => product.trending === "true"
  );
  // ----------------------------------------------------------------
  return (
    <div>
      <section className="mt-16 lg:mt-28">
        <SectionTitle
          heading={"Our Trending Trees"}
          subHeading={"popularized products here"}
        ></SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 gap-12 lg:gap-4 lg:mt-12 px-12">
          {trendingProducts.map((plants) => (
            <TrendingProductCard
              key={plants._id}
              plants={plants}
            ></TrendingProductCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TrendingProduct;
