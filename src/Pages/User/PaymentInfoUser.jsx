import { FaSearchengin } from "react-icons/fa";
import SectionTitle8 from "../../Components/SectionTitle8";
import UsePaymentHistory from "../../Hooks/UsePaymentHistory";
import { useState } from "react";

const PaymentInfoUser = () => {
  // =================================================================
  const [PaymentHistory, refetch] = UsePaymentHistory();
  const [searchQuery, setSearchQuery] = useState("");

  console.log(PaymentHistory);
  // ======================for searching functionality===========================================
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const filteredItems = PaymentHistory.filter(
    (payment) =>
      payment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.email.toLowerCase().includes(searchQuery.toLowerCase())
  );
  //   =================================================================

  return (
    <section className="text-white bg-slate-900">
      <div className="mb-24">hello</div>
      <SectionTitle8 heading={"Payment Info"}></SectionTitle8>
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

      {/* <div className="overflow-x-auto">
        <h1 className="ml-4 font-bold hover:underline">
          Total: {PaymentHistory.length}
        </h1>
        <table className="table ">
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
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </section>
  );
};

export default PaymentInfoUser;
