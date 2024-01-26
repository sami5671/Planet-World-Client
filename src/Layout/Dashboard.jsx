import { Link, NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";
import UseAuth from "../Hooks/UseAuth";
import UseCart from "../Hooks/UseCart";
import UseProduct from "../Hooks/UseProduct";
import UseUser from "../Hooks/UseUser";
import { BsGrid1X2Fill } from "react-icons/bs";
import { GiTreeGrowth } from "react-icons/gi";
import { IoMdTrendingUp } from "react-icons/io";

import {
  MdAssignmentAdd,
  MdLocalShipping,
  MdManageAccounts,
  MdMessage,
} from "react-icons/md";
import { IoBagAddSharp } from "react-icons/io5";
import { RiReplay5Fill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { FaCartShopping, FaCcVisa, FaTree } from "react-icons/fa6";
import UseOrder from "../Hooks/UseOrder";

const Dashboard = () => {
  // =================================================================
  const { user, logOut } = UseAuth();
  const [isAdmin] = UseAdmin();
  const [users] = UseUser();
  const [products] = UseProduct();
  const [cart] = UseCart();
  const [orders] = UseOrder();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  // =================================================================
  return (
    <>
      <div className="navbar bg-slate-900 shadow-lg shadow-white fixed z-10 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-8 lg:w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm -ml-2 dropdown-content mt-4 lg:mt-5 z-[1] shadow rounded-lg bg-slate-800 text-white w-52 lg:w-72 h-screen"
            >
              {isAdmin ? (
                <>
                  <NavLink to="/dashboard/adminDashboard">
                    <li className="">
                      <span className="text-white flex items-center">
                        <BsGrid1X2Fill />
                        Dashboard
                      </span>
                    </li>
                  </NavLink>
                  <NavLink to="/dashboard/addProduct">
                    <li className="">
                      <span className="text-white flex items-center">
                        <GiTreeGrowth />
                        Add Product
                      </span>
                    </li>
                  </NavLink>
                  <NavLink to="/dashboard/manageProduct">
                    <li className="">
                      <span className="text-white flex items-center">
                        <MdAssignmentAdd />
                        Manage Product
                        <span className="text-red-500 font-bold">
                          ({products.length})
                        </span>
                      </span>
                    </li>
                  </NavLink>
                  <NavLink to="/dashboard/trendingProduct">
                    <li className="">
                      <span className="text-white flex items-center">
                        <IoMdTrendingUp />
                        Manage Trending Products
                      </span>
                    </li>
                  </NavLink>
                  <NavLink to="/dashboard/manageUser">
                    <li className="">
                      <span className="text-white flex items-center">
                        <MdManageAccounts />
                        Manage Users
                        <span className="text-red-500 font-bold">
                          ({users.length})
                        </span>
                      </span>
                    </li>
                  </NavLink>
                  <NavLink to="/dashboard/orderInfo">
                    <li className="">
                      <span className="text-white flex items-center">
                        <IoBagAddSharp />
                        Order Info
                        <span className="text-red-500 font-bold">
                          ({orders.length})
                        </span>
                      </span>
                    </li>
                  </NavLink>
                  <div className="divider">Support</div>
                  <hr />
                  <NavLink to="/dashboard/messageSupportAdmin">
                    <li className="">
                      <span className="text-white flex items-center">
                        <MdMessage />
                        Messages
                      </span>
                    </li>
                  </NavLink>
                  <NavLink to="/dashboard/productReplaceAdmin">
                    <li className="">
                      <span className="text-white flex items-center">
                        <RiReplay5Fill />
                        Product Replace
                      </span>
                    </li>
                  </NavLink>
                  <div className="divider">OR</div>
                  <hr />
                  <NavLink to="/">
                    <li className="">
                      <span className="text-white flex items-center">
                        <FaHome /> HomePage
                      </span>
                    </li>
                  </NavLink>
                  <NavLink to="/allProduct">
                    <li className="">
                      <span className="text-white flex items-center">
                        <FaTree />
                        Products
                      </span>
                    </li>
                  </NavLink>
                  <NavLink to="/dashboard/userCart">
                    <li className="">
                      <span className="text-white flex items-center">
                        <FaCartShopping />
                        My Cart
                        <span className="text-red-500 font-bold">
                          ({cart.length})
                        </span>
                      </span>
                    </li>
                  </NavLink>
                  <NavLink to="/dashboard/paymentInfoUser">
                    <li className="mb-2">
                      <span className="text-white flex items-center hover:text-lime-500">
                        <FaCcVisa className="text-xl" />
                        Payment Info
                      </span>
                    </li>
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink to="/dashboard/userDashboard">
                    <li className="mb-2">
                      <span className="text-white flex items-center hover:text-lime-500">
                        <BsGrid1X2Fill className="text-xl" />
                        Dashboard
                      </span>
                    </li>
                  </NavLink>
                  <NavLink to="/dashboard/userCart">
                    <li className="mb-2">
                      <span className="text-white flex items-center hover:text-lime-500">
                        <FaCartShopping className="text-xl" />
                        My Cart
                        <span className="text-red-500 font-bold">
                          ({cart.length})
                        </span>
                      </span>
                    </li>
                  </NavLink>
                  <NavLink to="/dashboard/shippingInfoUser">
                    <li className="mb-2">
                      <span className="text-white flex items-center hover:text-lime-500">
                        <MdLocalShipping className="text-xl" />
                        Shipping Info
                      </span>
                    </li>
                  </NavLink>
                  <NavLink to="/dashboard/paymentInfoUser">
                    <li className="mb-2">
                      <span className="text-white flex items-center hover:text-lime-500">
                        <FaCcVisa className="text-xl" />
                        Payment Info
                      </span>
                    </li>
                  </NavLink>
                  <div className="divider">OR</div>
                  <hr />
                  <NavLink to="/">
                    <li className="mb-2 ">
                      <span className="text-white flex items-center hover:text-lime-500">
                        <FaHome className="text-xl" /> HomePage
                      </span>
                    </li>
                  </NavLink>
                  <NavLink to="/allProduct">
                    <li className="">
                      <span className="text-white flex items-center hover:text-lime-500">
                        <FaTree className="text-xl" />
                        Products
                      </span>
                    </li>
                  </NavLink>
                  <div className="divider">Support</div>
                  <hr />
                  <NavLink to="/dashboard/messageSupportUser">
                    <li className="">
                      <span className="text-white flex items-center hover:text-lime-500">
                        <MdMessage className="text-xl" />
                        Messages
                      </span>
                    </li>
                  </NavLink>
                  <NavLink to="/dashboard/replaceProductUser">
                    <li className="">
                      <span className="text-white flex items-center hover:text-lime-500">
                        <RiReplay5Fill className="text-xl" />
                        Product Replace
                      </span>
                    </li>
                  </NavLink>
                </>
              )}
            </ul>
          </div>
          {/*  */}
          {/* <div className="hidden lg:block">
        <ul className="flex gap-6 px-8  font-Rancho text-2xl text-lime-600 ">
          <Link to="/">
            <li className="hover:underline hover:text-lime-400">
              <a>Home</a>
            </li>
          </Link>
          <Link to="/allProduct">
            <li className="hover:underline hover:text-lime-400">
              <a>Product</a>
            </li>
          </Link>
          <Link>
            <li className="hover:underline hover:text-lime-400">
              <a>About Us</a>
            </li>
          </Link>
          <Link to="/weather">
            <li className="hover:underline hover:text-lime-400">
              <a>
                <span className="flex gap-1 items-center">
                  Weather
                  <span className="text-yellow-400">
                    <TiWeatherPartlySunny />
                  </span>
                </span>
              </a>
            </li>
          </Link>
        </ul>
      </div> */}
          {/*  */}
        </div>
        <div className="flex-1 text-center items-end justify-end gap-2">
          <div className="">
            {user ? (
              " "
            ) : (
              <Link to="/login">
                <button className="border-2 border-lime-500 transition duration-300 ease-in-out hover:border-white hover:text-white hover:bg-lime-300 lg:px-6 py-1">
                  Login
                </button>
              </Link>
            )}
          </div>

          <div className="dropdown dropdown-end">
            {user ? (
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="photo" src={user?.photoURL} />
                </div>
              </div>
            ) : (
              " "
            )}
            <span>
              {isAdmin ? (
                <>
                  <p className="bg-gradient-to-br from-lime-400 to-green-700 text-transparent bg-clip-text font-bold text-[12px] lg:text-2xl">
                    (Admin)
                  </p>
                </>
              ) : (
                <>
                  <p className="bg-gradient-to-br from-lime-400 to-green-700 text-transparent bg-clip-text font-bold text-[12px] lg:text-2xl">
                    (User)
                  </p>
                </>
              )}
            </span>
            <ul
              tabIndex={0}
              className=" mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content text-white  rounded-md bg-slate-950 w-52"
            >
              <li>
                <a className="justify-between">
                  {user?.displayName}
                  {isAdmin ? (
                    <span className="badge">Admin</span>
                  ) : (
                    <>
                      <span className="badge">User</span>
                    </>
                  )}
                </a>
              </li>
              {isAdmin ? (
                <li className="hover:text-lime-700">
                  <Link to="/dashboard/adminDashboard">Dashboard</Link>
                </li>
              ) : (
                <li>
                  <Link to="/dashboard/userDashboard">Dashboard</Link>
                </li>
              )}
              <li>
                <a>Settings</a>
              </li>
              {user ? (
                <li>
                  <button onClick={handleLogOut}>Logout</button>
                </li>
              ) : (
                <>
                  <Link to="/login">
                    <li>
                      <button>Login</button>
                    </li>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Dashboard;
