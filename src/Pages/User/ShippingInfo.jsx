import SectionTitle7 from "./../../Components/SectionTitle7";
import { FcProcess, FcShipped } from "react-icons/fc";
import {
  MdLocalShipping,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import { LuPackageOpen } from "react-icons/lu";
import { FaHome, FaShippingFast, FaTrash } from "react-icons/fa";
import Scrollbars from "react-custom-scrollbars-2";
import UseShipping from "../../Hooks/UseShipping";
import OrderDetailsCard from "../Admin/OrderDetailsCard";
import "./CarAnimition.css";
import UseShippedProductUserInfo from "../../Hooks/UseShippedProductUserInfo";
import { GiBonsaiTree } from "react-icons/gi";
import ModalCart from "./ModalCart";
import { FaMapLocation } from "react-icons/fa6";
import { RiDeleteBin5Fill, RiUserLocationFill } from "react-icons/ri";
import SectionTitle6 from "../../Components/SectionTitle6";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const ShippingInfo = () => {
  // =================================================================
  const axiosPublic = useAxiosPublic();
  // =================================================================
  const [shipping = []] = UseShipping();

  // Destructure specific properties from the first item in the array
  const { orderStatus, orderCart } = shipping[0] || {};

  // console.log(orderStatus, orderCart);
  // =================================================================
  const [shippingConfirm, refetch] = UseShippedProductUserInfo();
  // console.log(shippingConfirm);
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

  //   =========================Delete payment info========================================
  const handleDeletePayment = (id) => {
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
        axiosPublic.delete(`/deleteShippedHistory/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            // console.log(res);
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  // =================================================================
  return (
    <>
      <section className="bg-slate-900">
        <div>
          <h1 className="mb-20">hello</h1>
        </div>
        <SectionTitle7 heading={"Shipping Info"}></SectionTitle7>

        <div className="px-2 lg:px-24">
          <h1 className="text-white font-bold mb-16 lg:text-3xl">
            Shipping Track:
          </h1>
        </div>
        <div className="text-white lg:w-full px-2 lg:px-44">
          <div className="bg-white h-[10px] w-full rounded-md"></div>
        </div>
        {/* processing */}

        <div className="ml-2 lg:ml-[170px]">
          <p className="">
            <p className="text-white font-bold text-[10px] lg:text-xl flex items-center gap-1 lg:gap-2">
              <FcProcess className="lg:text-2xl bg-white rounded-md" />
              Processing
            </p>
          </p>

          {orderStatus === "processing" ? (
            <p
              className={`absolute -mt-12 lg:-mt-[75px] ${
                window.innerWidth >= 1024 ? "animate-car" : ""
              }`}
            >
              <MdLocalShipping className="text-3xl lg:text-5xl text-lime-400 rounded-md" />
            </p>
          ) : (
            " "
          )}
        </div>
        {/* processing */}

        {/* packing */}
        <div className="ml-[85px] lg:ml-[440px] -mt-[15px] lg:-mt-[28px]">
          <p className="">
            <p className="text-white font-bold text-[10px] lg:text-xl flex items-center gap-2">
              <LuPackageOpen className="lg:text-2xl bg-white text-black rounded-md " />
              Packing
            </p>
          </p>
          {orderStatus === "packing" ? (
            <p
              className={`absolute -mt-12 lg:-mt-[75px] ${
                window.innerWidth >= 1024 ? "animate-car" : ""
              }`}
            >
              <MdLocalShipping className="text-3xl lg:text-5xl text-lime-400 rounded-md" />
            </p>
          ) : (
            " "
          )}
        </div>
        {/* packing */}
        {/* shipping */}
        <div className="ml-[160px] lg:ml-[730px] -mt-[15px] lg:-mt-[28px]">
          <p className="">
            <p className="text-white font-bold text-[10px] lg:text-xl flex items-center gap-2">
              <MdLocalShipping className="lg:text-2xl bg-white text-black rounded-md " />
              Shipping
            </p>
          </p>
          {orderStatus === "shipping" ? (
            <p
              className={`absolute -mt-[50px] lg:-mt-[75px] ${
                window.innerWidth >= 1024 ? "animate-car" : ""
              }`}
            >
              <FaShippingFast className="text-3xl lg:text-5xl text-lime-400 rounded-md" />
            </p>
          ) : (
            " "
          )}
        </div>
        {/* shipping */}
        {/* delivered  */}
        <div className="ml-[245px] lg:ml-[1180px] -mt-[15px] lg:-mt-[28px]">
          <p className="">
            <p className="text-white font-bold text-[10px] lg:text-xl flex items-center gap-2">
              <FaHome className="lg:text-2xl bg-white text-black rounded-md " />
              Delivered
            </p>
          </p>
          {orderStatus === "delivered" ? (
            <p className="absolute -mt-12 lg:-mt-[75px]">
              <FcShipped className="text-3xl lg:text-5xl text-lime-400 rounded-md" />
            </p>
          ) : (
            " "
          )}
        </div>
        {/* delivered */}

        <section className="mt-12 px-2 lg:px-24">
          <div>
            <h1 className="text-white font-bold mb-16 lg:text-3xl flex items-center gap-2">
              Ordered Products
              <MdOutlineProductionQuantityLimits className="lg:text-5xl" />
            </h1>
          </div>
          {/* cart items */}
          <div className="bg-white shadow-2xl lg:w-[500px] lg:h-[395px]">
            <Scrollbars style={{ width: "100%", height: "380px" }}>
              <div>
                {orderCart?.map((item) => (
                  <OrderDetailsCard
                    key={item._id}
                    items={item}
                  ></OrderDetailsCard>
                ))}
              </div>
            </Scrollbars>
          </div>
        </section>
        {/* product info */}

        {/* shipping info previous and recent */}
        <div>
          <SectionTitle6 heading={"Previous Order Info"}></SectionTitle6>
        </div>
        <div className="overflow-x-auto text-white">
          <h1 className="ml-4 text-white font-bold hover:underline">
            Total Shipped: {shippingConfirm.length}
          </h1>
          <table className="table ">
            <thead className="text-white text-[16px]">
              <tr>
                <th>No.</th>
                <th>Date</th>
                <th>Orderer Name</th>
                <th>Email</th>
                <th>Image</th>
                <th>payment</th>
                <th>Order items</th>
                <th>Billing Address</th>
                <th>Shipping Address</th>
                <th>Erase</th>
              </tr>
            </thead>
            <tbody>
              {shippingConfirm.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{formatDate(item.date)}</td>
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
                          document
                            .getElementById(`my_modal_${index}`)
                            .showModal()
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
                  <td>
                    <p className="mt-2">
                      <button onClick={() => handleDeletePayment(item._id)}>
                        <span className="text-2xl text-red-600 hover:text-orange-500">
                          <RiDeleteBin5Fill />
                        </span>
                      </button>
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* shipping info previous and recent */}

        <div className="text-slate-900 mt-12">
          <h1>hello</h1>
        </div>
      </section>
    </>
  );
};

export default ShippingInfo;
