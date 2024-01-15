import { useEffect, useState } from "react";
import useAxiosPublic from "./../../Hooks/useAxiosPublic";
import TrendingProductCard from "./TrendingProductCard";
const TrendingProduct = () => {
  // ----------------------------------------------------------------
  const axiosPublic = useAxiosPublic();
  const [allPlants, setAllPlants] = useState([]);
  useEffect(() => {
    axiosPublic.get("/AllPlants").then((res) => {
      setAllPlants(res.data);
    });
  }, [axiosPublic]);
  console.log(allPlants);
  // ----------------------------------------------------------------
  return (
    <div>
      <section className="mt-16 lg:mt-28">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4 px-12">
          {allPlants.map((plants) => (
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
