import Swal from "sweetalert2";
import UseProduct from "../../Hooks/UseProduct";
import { FaInfoCircle, FaTrashRestoreAlt } from "react-icons/fa";
import { FaAngular, FaFileSignature, FaSearchengin } from "react-icons/fa6";
import { useState } from "react";

const ManageProduct = () => {
  // =================================================================

  const [products] = UseProduct();
  const [searchQuery, setSearchQuery] = useState("");

  console.log(products);
  // =================================================================
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (plant) =>
      plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.plantType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // =================================================================================================
  return (
    <>
      <section className="text-white bg-slate-900">
        {/* for search */}
        <div className="relative mb-6">
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
          <table className="table ">
            {/* head */}
            <thead className="text-white">
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Category</th>
                <th>Image</th>
                <th>Price</th>
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
                  <td>Update</td>
                  <td>Delete</td>
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
