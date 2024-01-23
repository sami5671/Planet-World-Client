import Swal from "sweetalert2";
import UseProduct from "../../Hooks/UseProduct";
import { FaTrash } from "react-icons/fa";
import { FaSearchengin } from "react-icons/fa6";
import { useState } from "react";
import { IoInformationCircle } from "react-icons/io5";

import SectionTitle2 from "./../../Components/SectionTitle2";
import { TfiWrite } from "react-icons/tfi";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ManageProduct = () => {
  // =================================================================

  const [products, refetch] = UseProduct();
  const [searchQuery, setSearchQuery] = useState("");
  const axiosSecure = useAxiosSecure();

  // console.log(products);
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
  // ==================================for delete any product===============================================================
  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/deleteProduct/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            console.log(res);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  // =================================================================================================
  return (
    <>
      <section className="text-white bg-slate-900 ">
        <div className="mb-20">hello</div>

        <SectionTitle2 heading={"Manage Your Product"}></SectionTitle2>

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
                <th>Update</th>
                <th>Delete</th>
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
                  {/* update info */}

                  <td>
                    <Link to={`/dashboard/updateProduct/${item._id}`}>
                      <button>
                        <span className="text-2xl hover:text-lime-300">
                          <TfiWrite />
                        </span>
                      </button>
                    </Link>
                  </td>

                  {/* update info */}
                  <td>
                    <button onClick={() => handleDeleteProduct(item._id)}>
                      <span className="text-xl text-red-600 hover:text-orange-500">
                        <FaTrash />
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default ManageProduct;
