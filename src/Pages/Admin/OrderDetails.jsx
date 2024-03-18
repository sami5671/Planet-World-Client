import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SectionTitle6 from "./../../Components/SectionTitle6";
import { FaUser } from "react-icons/fa6";
import Scrollbars from "react-custom-scrollbars-2";
import OrderDetailsCard from "./OrderDetailsCard";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import Swal from "sweetalert2";

const OrderDetails = () => {
  // =================================================================
  const orderDetails = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  // console.log(orderDetails);

  const {
    _id,
    billingAddress,
    date,
    email,
    name,
    orderCart,
    phone,
    photo,
    price,
    shippingAddress,
    status,
    transactionId,
  } = orderDetails;

  // console.log(orderCart);

  // =================================================================

  const handleDeleteOrder = (id) => {
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
        axiosSecure.delete(`/deleteOrder/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            // console.log(res);
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
            // refetch();
            navigate("/dashboard/orderInfo");
          }
        });
      }
    });
  };

  // =========================Post in the shipping info========================================

  const shippingConfirm = (id) => {
    const shippingConfirmed = {
      billingAddress: billingAddress,
      email: email,
      name: name,
      orderCart: orderCart,
      phone: phone,
      photo: photo,
      price: price,
      shippingAddress: shippingAddress,
      status: status,
      transactionId: transactionId,
      confirmShipped: true,
      date: new Date(),
    };

    const res = axiosSecure.post("/shippingConfirmed", shippingConfirmed);
    if (res?.data?.insertedId) {
      Swal.fire("The Product has been added successfully");
    }
  };

  // =================================================================
  return (
    <section className="text-white bg-slate-900">
      <div className="mb-24"> hello</div>
      <SectionTitle6 heading={"Order Details"}></SectionTitle6>

      <section className="px-2 lg:w-2/3 lg:px-12">
        {/* customer info  */}
        <div>
          <h1 className="flex items-center gap-2 text-lime-400 font-bold text-2xl mb-6">
            Customer Information <FaUser></FaUser>
          </h1>
        </div>

        <div className=" bg-slate-800 py-8 px-6 lg:px-12 flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16 shadow-md shadow-white">
          <div>
            <img
              src={photo}
              className="rounded-full w-[70px] h-[70px]"
              alt=""
            />
            <p className="mt-4">
              <span className=" text-xl font-bold text-lime-300">Name: </span>
              {name}
            </p>
            <p>
              <span className="text-xl font-bold text-lime-300">Email: </span>
              {email}
            </p>
            <p>
              <span className="text-xl font-bold text-lime-300">Phone: </span>
              {phone}
            </p>
            <p>
              <span className="text-xl font-bold text-lime-300">Payment: </span>
              <span className="text-green-500 font-bold">
                {status} ( ${price} )
              </span>
            </p>
          </div>

          <div className="lg:mt-20">
            <p>
              <span className="text-xl font-bold text-lime-300">
                Billing Address:{" "}
              </span>
              {billingAddress}
            </p>
            <p>
              {" "}
              <span className="text-xl font-bold text-lime-300">
                Shipping Address:{" "}
              </span>{" "}
              {shippingAddress}
            </p>
            <p className="">
              {" "}
              <span className="text-[18px] font-bold text-lime-300">
                Transaction Id:
              </span>
              <span className="text-green-500 font-bold"> {transactionId}</span>
            </p>
            <p className="mt-2">
              <button
                onClick={() => handleDeleteOrder(_id)}
                className="bg-red-700 px-2 hover:bg-red-400 py-1 font-bold rounded-md"
              >
                Remove From Order Queue
              </button>
              <button
                onClick={() => shippingConfirm(_id)}
                className="bg-lime-700 px-2 hover:bg-white hover:text-black py-1 font-bold rounded-md ml-2"
              >
                Confirm Shipped
              </button>
            </p>
          </div>
        </div>

        {/* customer info  */}
      </section>

      {/* product info */}
      <section className="px-2 lg:px-12 mt-16">
        <div>
          <h1 className="flex items-center gap-2 text-lime-400 font-bold text-2xl mb-6">
            Product Information{" "}
            <MdOutlineProductionQuantityLimits className="lg:text-5xl" />
          </h1>
        </div>

        {/* cart items */}
        <div className="bg-white shadow-2xl lg:w-[500px] lg:h-[395px]">
          <Scrollbars style={{ width: "100%", height: "380px" }}>
            <div>
              {orderCart?.map((items) => (
                <OrderDetailsCard
                  key={items._id}
                  items={items}
                ></OrderDetailsCard>
              ))}
            </div>
          </Scrollbars>
        </div>
      </section>
      {/* product info */}

      <div className="mt-20 text-slate-900">hello</div>
    </section>
  );
};

export default OrderDetails;
