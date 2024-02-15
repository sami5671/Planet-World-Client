import { FaSearchengin, FaTrash } from "react-icons/fa";
import { GiBonsaiTree } from "react-icons/gi";
import { FaMapLocation } from "react-icons/fa6";
import { RiUserLocationFill } from "react-icons/ri";
import SectionTitle8 from "../../Components/SectionTitle8";
import UsePaymentHistory from "../../Hooks/UsePaymentHistory";
import { useState } from "react";
import ModalCart from "./ModalCart";
import Scrollbars from "react-custom-scrollbars-2";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const PaymentInfoUser = () => {
  // =================================================================
  const [PaymentHistory, refetch] = UsePaymentHistory();
  const [searchQuery, setSearchQuery] = useState("");
  const axiosSecure = useAxiosSecure();

  // console.log(PaymentHistory);
  // ===========================date format======================================
  const formatDate = (dateString) => {
    // Create a new Date object from the ISO string
    const date = new Date(dateString);

    // Options for formatting the date
    const options = {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };

    // Format the date
    return date.toLocaleDateString("en-US", options);
  };

  // ======================for searching functionality===========================================
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const filteredItems = PaymentHistory.filter((payment) =>
    formatDate(payment.date).toLowerCase().includes(searchQuery)
  );
  //   =========================Delete payment info========================================
  // const handleDeletePayment = (id) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       axiosSecure.delete(`/deletePaymentHistory/${id}`).then((res) => {
  //         if (res.data.deletedCount > 0) {
  //           // console.log(res);
  //           Swal.fire({
  //             title: "Deleted!",
  //             text: "User has been deleted.",
  //             icon: "success",
  //           });
  //           refetch();
  //         }
  //       });
  //     }
  //   });
  // };

  // =================================================================
  return (
    <section className="text-white bg-slate-900">
      <div className="mb-24">hello</div>
      <SectionTitle8 heading={"Payment Info"}></SectionTitle8>
      {/* for search */}
      <div className="relative mb-6 flex items-end justify-end mr-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search By Date"
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
          Total Payment: {PaymentHistory.length}
        </h1>
        <table className="table ">
          <thead className="text-white text-[16px]">
            <tr>
              <th>No.</th>
              <th>Date</th>
              <th>Transaction ID</th>
              <th>Orderer Name</th>
              <th>Email</th>
              <th>Image</th>
              <th>payment</th>
              <th>Order items</th>
              <th>Billing Address</th>
              <th>Shipping Address</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{formatDate(item.date)}</td>
                <td className="text-[12px]">{item.transactionId}</td>
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
                <td className="lg:text-4xl ">
                  <span className="flex justify-center hover:text-green-600 cursor-pointer">
                    <button
                      className=""
                      onClick={() =>
                        document.getElementById(`my_modal_${index}`).showModal()
                      }
                    >
                      <GiBonsaiTree />
                    </button>
                    <dialog
                      id={`my_modal_${index}`}
                      className="modal modal-bottom sm:modal-middle"
                    >
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">
                          <span>Total Ordered Item: </span>
                          {item?.orderCart?.length}
                        </h3>
                        <div className="bg-white shadow-2xl mb-12 lg:w-[440px] lg:h-[500px]">
                          <Scrollbars
                            style={{ width: "100%", height: "380px" }}
                          >
                            <div>
                              {item?.orderCart?.map((orderItem) => (
                                <ModalCart
                                  key={orderItem._id}
                                  orderItem={orderItem}
                                />
                              ))}
                            </div>
                          </Scrollbars>
                        </div>
                        <div className="modal-action">
                          <form method="dialog">
                            <button className="border-2 px-8 text-white font-bold text-xl bg-green-400 hover:bg-red-600">
                              <span className="">Close</span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </span>
                </td>
                <td>
                  {item.billingAddress}
                  <FaMapLocation />
                </td>
                <td className="flex items-center gap-2">
                  {item.shippingAddress}
                  <RiUserLocationFill />
                </td>
                {/* <td>
                  <p className="mt-2">
                    <button onClick={() => handleDeletePayment(item._id)}>
                      <span className="text-2xl text-red-600 hover:text-orange-500">
                        <FaTrash />
                      </span>
                    </button>
                  </p>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PaymentInfoUser;
