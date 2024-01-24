import { useState } from "react";
import SectionTitle3 from "../../Components/SectionTitle3";
import UseProduct from "../../Hooks/UseProduct";
import { FaSearchengin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoInformationCircle } from "react-icons/io5";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { GiPineTree } from "react-icons/gi";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const AddTrendingProduct = () => {
  // =================================================================
  const axiosSecure = useAxiosSecure();
  const [products, refetch] = UseProduct();
  const [searchQuery, setSearchQuery] = useState("");
  //   console.log(products);
  // =================================================================
  // ======================for searching functionality===========================================
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const filteredItems = products.filter(
    (plant) =>
      plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.plantType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  //   =================================================================
  // ===========================Make trending  & remove trending ======================================
  const handleMakeTrending = (item) => {
    axiosSecure.patch(`/product/trending/${item._id}`).then((res) => {
      // console.log(res.data);
      if (res.data.modifiedCount > 0) {
        toast(`${item.name} Is Now a Trending Product`);
        refetch();
      }
    });
  };
  //   =================================================================

  return (
    <section className="text-white bg-slate-900">
      <div className="mb-20">hello</div>
      <SectionTitle3 heading={"Trending Your Product"}></SectionTitle3>

      {/* for search */}
      <div className="relative mb-6 flex items-end justify-end mr-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Name || Category || PlantType"
            className="lg:w-[420px] border-2 rounded-lg border-lime-400 text-xl font-bold text-lime-600 h-[35px] pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all duration-300"
            onChange={handleInputChange}
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearchengin className="text-slate-500" />
          </div>
        </div>
      </div>
      {/* for search */}
      <div className="overflow-x-auto">
        <h1 className="ml-4 font-bold hover:underline">
          Total: {products.length}
        </h1>
        <table className="table ">
          {/* head */}
          <thead className="text-white text-[16px]">
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Category</th>
              <th>Image</th>
              <th>Price</th>
              <th>Details</th>
              <th>Trending</th>
              <th>Remove Trending</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {filteredItems.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>
                  <div className="avatar">
                    <div className="rounded-full w-12 h-12">
                      <img src={item.img1} alt="img" />
                    </div>
                  </div>
                </td>
                <td>
                  <span className="text-[18px] font-bold">
                    ${item.newPrice}
                  </span>
                  <span className="ml-2">
                    <del>{item.previousPrice}</del>
                  </span>
                </td>
                <Link to={`/product/${item._id}`}>
                  <td>
                    <span className="text-4xl hover:text-lime-500 text-center">
                      <IoInformationCircle />
                    </span>
                  </td>
                </Link>
                {/* trending  info */}

                <td>
                  {item.trending === "true" ? (
                    <>
                      <button className="px-4 py-3 rounded-lg">
                        <BsArrowUpRightSquareFill className="text-green-500 text-xl" />
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleMakeTrending(item)}
                      className="px-4 py-3 rounded-lg bg-cyan-500"
                    >
                      <GiPineTree className="text-white text-xl" />
                    </button>
                  )}
                </td>

                {/* remove trending info */}
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AddTrendingProduct;
