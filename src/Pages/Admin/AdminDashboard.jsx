import UseUser from "../../Hooks/UseUser";
import UseAdmin from "../../Hooks/UseAdmin";
import UseCart from "../../Hooks/UseCart";
import UseProduct from "../../Hooks/UseProduct";
import UseRevenueCalculation from "../../Hooks/UseRevenueCalculation";
import Statistics from "./Statistics";
import { FaTree, FaUsers } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";

const AdminDashboard = () => {
  const [users] = UseUser();
  const [revenueCalculation] = UseRevenueCalculation();
  const [isAdmin] = UseAdmin();
  const [cart] = UseCart();
  const [products] = UseProduct();

  // Revenue calculation
  let totalRevenue = 0;

  revenueCalculation.forEach((item) => {
    totalRevenue += parseFloat(item.price);
  });
  return (
    <section className="bg-slate-950">
      <div className="mb-32">hello</div>
      <div className="text-white mt-6 lg:ml-12 lg:mt-12">
        <div className="flex flex-col lg:flex-row px-4 gap-4 lg:gap-2 font-bold text-xl">
          <div className="bg-green-600 rounded-lg lg:w-[170px] lg:h-[80px] py-4 px-2 shadow-md shadow-white">
            <span className="flex items-center gap-2">
              Products <FaTree />
            </span>
            ({products.length})
          </div>
          <div className="bg-orange-500 rounded-lg lg:w-[170px] lg:h-[80px] py-4 px-2 shadow-md shadow-white">
            <span className="flex items-center gap-2">
              Customers <FaUsers />
            </span>
            ({users.length})
          </div>
          <div className="bg-blue-600 rounded-lg lg:w-[170px] lg:h-[80px] py-4 px-2 shadow-md shadow-white">
            <span className="flex items-center gap-2">
              Revenue <FaMoneyBillTrendUp />
            </span>
            $ {totalRevenue}
          </div>
          <div className="bg-red-700 rounded-lg lg:w-[170px] lg:h-[80px] py-4 px-2 shadow-md shadow-white">
            <span className="flex items-center gap-2">
              Messages <BiSolidMessageRoundedDetail />
            </span>
            ({products.length})
          </div>
        </div>
      </div>

      <Statistics />
      <div className="py-12 text-slate-950"></div>
    </section>
  );
};

export default AdminDashboard;
