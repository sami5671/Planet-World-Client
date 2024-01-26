import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SectionTitle6 from "./../../Components/SectionTitle6";

const OrderDetails = () => {
  // =================================================================
  const orderDetails = useLoaderData();
  console.log(orderDetails);

  // =================================================================
  return (
    <section className="text-white bg-slate-900">
      <div className="mb-24"> hello</div>
      <SectionTitle6 heading={"Order Details"}></SectionTitle6>
    </section>
  );
};

export default OrderDetails;
