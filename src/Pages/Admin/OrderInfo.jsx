import { ToastContainer, toast } from "react-toastify";
import UseOrder from "../../Hooks/UseOrder";
import { useState } from "react";
import { FaSearchengin } from "react-icons/fa6";
import { IoInformationCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { GiPineTree } from "react-icons/gi";
import { LuPackageOpen, LuRemoveFormatting } from "react-icons/lu";
import { FcProcess, FcShipped } from "react-icons/fc";
import { FaShippingFast } from "react-icons/fa";
import SectionTitle6 from "./../../Components/SectionTitle6";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const OrderInfo = () => {
  // =================================================================
  const axiosSecure = useAxiosSecure();
  const [orders, refetch] = UseOrder();
  const [searchQuery, setSearchQuery] = useState("");
  // console.log(orders);
  // ======================for searching functionality===========================================
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const filteredItems = orders.filter(
    (order) =>
      order.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.email.toLowerCase().includes(searchQuery.toLowerCase())
  );
  //   =================================================================

  // =================================================================

  // =================================================================
  const handleProcessing = (item) => {
    axiosSecure.patch(`/payments/orderStatus/${item._id}`).then((res) => {
      // console.log(res.data);
      if (res.data.modifiedCount > 0) {
        toast("Is Now On Processing");
        refetch();
      }
    });
  };
  // =================================================================================================
  return (
    <section className="text-white bg-slate-900">
      <div className="mb-20">hello</div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      <div>
        <SectionTitle6 heading={"Order InFo"}></SectionTitle6>
      </div>
      {/* for search */}
      <div className="relative mb-6 flex items-end justify-end mr-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Name || Email"
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
          Total: {orders.length}
        </h1>
        <table className="table ">
          {/* head */}
          <thead className="text-white text-[16px]">
            <tr>
              <th>No</th>
              <th>Orderer Name</th>
              <th>Email</th>
              <th>Image</th>
              <th>payment</th>
              <th>Order Details</th>
              <th>Processing</th>
              <th>Packing</th>
              <th>Shipping</th>
              <th>Delivered</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {filteredItems.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <div className="avatar">
                    <div className="rounded-full w-8 h-8">
                      <img src={item.photo} alt="img" />
                    </div>
                  </div>
                </td>
                <td>
                  <span className="text-[18px] font-bold">${item.price}</span>
                  <span className="ml-2">
                    <span className=" text-green-700 font-bold">
                      {item.status}
                    </span>
                  </span>
                </td>
                <Link to={`/dashboard/orderDetails/${item._id}`}>
                  <td>
                    <span className="text-4xl hover:text-lime-500 text-center">
                      <IoInformationCircle />
                    </span>
                  </td>
                </Link>
                {/* trending  info */}

                <td>
                  {item.orderStatus === "processing" ? (
                    <>
                      <button className="px-4 py-3 rounded-lg">
                        <BsArrowUpRightSquareFill className="text-green-500 text-xl" />
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleProcessing(item)}
                      className="px-4 py-3 rounded-lg bg-white"
                    >
                      <FcProcess className="text-white text-xl" />
                    </button>
                  )}
                </td>

                {/* packing */}
                <td>
                  {item.trending === "true" ? (
                    <>
                      <button className="px-4 py-3 rounded-lg">
                        <BsArrowUpRightSquareFill className="text-green-500 text-xl" />
                      </button>
                    </>
                  ) : (
                    <button
                      // onClick={() => handleMakeTrending(item)}
                      className="px-4 py-3 rounded-lg bg-white"
                    >
                      <LuPackageOpen className="text-black text-xl" />
                    </button>
                  )}
                </td>
                {/* shipping */}
                <td>
                  {item.trending === "true" ? (
                    <>
                      <button className="px-4 py-3 rounded-lg">
                        <BsArrowUpRightSquareFill className="text-green-500 text-xl" />
                      </button>
                    </>
                  ) : (
                    <button
                      // onClick={() => handleMakeTrending(item)}
                      className="px-4 py-3 rounded-lg bg-white"
                    >
                      <FaShippingFast className="text-black text-xl" />
                    </button>
                  )}
                </td>
                {/* delivered */}
                <td>
                  {item.trending === "true" ? (
                    <>
                      <button className="px-4 py-3 rounded-lg">
                        <FcShipped className="text-black text-xl" />
                      </button>
                    </>
                  ) : (
                    <button
                      // onClick={() => handleMakeTrending(item)}
                      className="px-4 py-3 rounded-lg bg-white"
                    >
                      <FcShipped className=" text-xl" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default OrderInfo;
