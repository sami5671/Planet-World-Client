import { FaHome, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { MdLocalShipping, MdSpaceDashboard } from "react-icons/md";
import { FaTree } from "react-icons/fa6";
import { BiSolidMessageDetail } from "react-icons/bi";
import { RiReplay10Fill } from "react-icons/ri";
import UseAuth from "../Hooks/UseAuth";
import { FaCcAmazonPay } from "react-icons/fa";
import UseCart from "../Hooks/UseCart";
const Dashboard = () => {
  // ----------------------------------------------------------------
  const { user, logOut } = UseAuth();
  const [cart] = UseCart();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  // ----------------------------------------------------------------
  return (
    <div className="flex flex-col lg:flex-row bg-slate-900">
      {/* dashboard side bar */}
      <div className="w-full lg:64 lg:w-1/5 lg:min-h-screen ">
        <ul className="menu p-4 w-30 lg:w-80 lg:text-[16px] text-lime-700 gap-1 min-h-full bg-lime-50">
          {/* Sidebar content here */}
          <div className="flex gap-2">
            <div className="btn-circle avatar">
              <img src={user.photoURL} className="w-10 rounded-full" alt="" />
            </div>
            <div>
              <h1 className="lg:text-[25px]">{user.displayName}</h1>
              <p className="">{user.email}</p>
              <button
                onClick={handleLogOut}
                className="underline font-bold hover:text-lime-400"
              >
                Logout
              </button>
            </div>
          </div>
          <li className="text-lime-500 mt-16">
            <NavLink to="/dashboard">
              <MdSpaceDashboard />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/userCart">
              <FaShoppingCart /> My Cart ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/shipping">
              <MdLocalShipping />
              Shipping Info
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/shipping">
              <FaCcAmazonPay />
              Payment Info
            </NavLink>
          </li>

          {/* shared nav links */}
          <div className="divider">OR</div>
          <li>
            <NavLink to="/">
              <FaHome />
              Back to Home Page
            </NavLink>
          </li>
          <li>
            <NavLink to="/allProduct">
              <FaTree />
              Products
            </NavLink>
          </li>

          {/* support  */}
          <div className="divider">SUPPORT</div>
          <li>
            <NavLink to="/dashboard/message">
              <BiSolidMessageDetail />
              Message Support(24/7)
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/message">
              <RiReplay10Fill />
              Replace Your Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/message">
              <RiReplay10Fill />
              Replace Your Product
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
