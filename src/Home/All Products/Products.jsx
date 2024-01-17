import { useEffect, useState } from "react";
import { FaSearchengin } from "react-icons/fa6";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import TrendingProductCard from "../Trending Products/TrendingProductCard";

const Products = () => {
  const axiosPublic = useAxiosPublic();
  const [allPlants, setAllPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axiosPublic.get("/AllPlants").then((res) => {
      setAllPlants(res.data);
    });
  }, [axiosPublic]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredItems = allPlants.filter(
    (plant) =>
      plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.plantType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="">
      <div>
        <h1 className="text-white mb-16">hello</h1>
      </div>
      {/* Search input */}
      <div className="relative flex items-center justify-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search tree name"
            className="lg:w-[420px] border-2 rounded-lg border-lime-400 text-xl font-bold text-lime-600 h-[35px] pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all duration-300"
            onChange={handleInputChange}
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearchengin className="text-slate-500" />
          </div>
        </div>
      </div>

      {/* Display filtered plants */}
      <section className="mt-12 lg:mt-18">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4 px-12">
          {filteredItems.map((plant) => (
            <TrendingProductCard
              key={plant._id}
              plants={plant}
            ></TrendingProductCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
