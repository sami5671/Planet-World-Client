import { Link, NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../../Hooks/UseAdmin";
import UseAuth from "../../Hooks/UseAuth";
import UseCart from "../../Hooks/UseCart";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { GiFruitTree } from "react-icons/gi";
import { FaCartShopping, FaTree } from "react-icons/fa6";
import { BsFillGearFill, BsGrid1X2Fill } from "react-icons/bs";
import {
  MdAssignmentAdd,
  MdLocalShipping,
  MdManageAccounts,
  MdMessage,
} from "react-icons/md";
import { IoBagAddSharp } from "react-icons/io5";
import { RiReplay5Fill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import UseUser from "../../Hooks/UseUser";
import UseProduct from "../../Hooks/UseProduct";

const NewDashboard = () => {
  // =================================================================
  const { user, logOut } = UseAuth();
  const [isAdmin] = UseAdmin();
  const [users] = UseUser();
  const [products] = UseProduct();
  const [cart] = UseCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  // =================================================================
  return (
    <>
      <div className="navbar bg-slate-900 fixed z-10 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
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
              className="menu menu-sm -ml-2 dropdown-content mt-0 z-[1] shadow bg-slate-900 text-white w-52 lg:w-72 h-screen"
            >
              {isAdmin ? (
                <>
                  <NavLink to="/newdashboard/adminDashboard">
                    <li className="flex items-center gap-2">
                      <BsGrid1X2Fill /> Dashboard
                    </li>
                  </NavLink>
                  <NavLink to="/dashboard/manageProduct">
                    <li className="flex items-center gap-2">
                      <MdAssignmentAdd />
                      Manage Product
                      <span className="text-red-500 font-bold">
                        ({products.length})
                      </span>
                    </li>
                  </NavLink>
                  <NavLink to="/dashboard/manageUser">
                    <li className="flex items-center gap-2">
                      <MdManageAccounts />
                      Manage Users
                      <span className="text-red-500 font-bold">
                        ({users.length})
                      </span>
                    </li>
                  </NavLink>
                  <NavLink to="/dashboard/orderInfo">
                    <li className="flex items-center gap-2">
                      <IoBagAddSharp />
                      Order Info
                    </li>
                  </NavLink>
                  <div className="divider">Support</div>
                  <NavLink to="/dashboard/messageSupportAdmin">
                    <li className="flex items-center gap-2">
                      <MdMessage />
                      Messages
                    </li>
                  </NavLink>
                  <NavLink to="/dashboard/productReplaceAdmin">
                    <li className="flex items-center gap-2">
                      <RiReplay5Fill />
                      Product Replace
                    </li>
                  </NavLink>
                  <div className="divider">OR</div>
                  <NavLink to="/">
                    <li className="flex items-center gap-2">
                      <FaHome /> HomePage
                    </li>
                  </NavLink>
                  <NavLink to="/allProduct">
                    <li className="flex items-center gap-2">
                      <FaTree />
                      Products
                    </li>
                  </NavLink>
                  <NavLink to="/dashboard/userCart">
                    <li className="flex items-center gap-2">
                      <FaCartShopping />
                      My Cart
                      <span className="text-red-500 font-bold">
                        ({cart.length})
                      </span>
                    </li>
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink to="/dashboard/userDashboard">
                    <li className="flex items-center gap-2">
                      <BsGrid1X2Fill /> Dashboard
                    </li>
                  </NavLink>
                  <NavLink to="/newdashboard/userCart">
                    <li className="flex items-center gap-2">
                      <FaCartShopping />
                      My Cart
                    </li>
                  </NavLink>
                  <NavLink to="/dashboard/shippingInfoUser">
                    <li className="flex items-center gap-2">
                      <MdLocalShipping />
                      Shipping Info
                    </li>
                  </NavLink>
                  <div className="divider">OR</div>
                  <NavLink to="/">
                    <li className="flex items-center gap-2">
                      <FaHome /> HomePage
                    </li>
                  </NavLink>
                  <NavLink to="/products">
                    <li className="flex items-center gap-2">
                      <FaTree />
                      Products
                    </li>
                  </NavLink>
                  <div className="divider">Support</div>
                  <NavLink to="/dashboard/messageSupportUser">
                    <li className="flex items-center gap-2">
                      <MdMessage /> Message Support
                    </li>
                  </NavLink>
                  <NavLink to="/dashboard/replaceProductUser">
                    <li className="flex items-center gap-2">
                      <RiReplay5Fill />
                      Replace your Product
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
          <span className="block lg:hidden gap-6 text-white">
            {isAdmin ? "Admin Dashboard" : "User Dashboard"}
          </span>
        </div>

        <div className="flex-1 gap-2">
          <span className="hidden lg:block">
            <GiFruitTree className="text-2xl text-lime-600" />
          </span>
          <a className="hidden lg:block bg-gradient-to-br from-lime-400 to-green-700 text-transparent bg-clip-text font-bold text-2xl">
            {isAdmin ? (
              <> Plant World (Admin Panel)</>
            ) : (
              <>Plant World (User Dashboard)</>
            )}
          </a>
        </div>
        <div className="flex-none gap-2">
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

            <ul
              tabIndex={0}
              className=" mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content text-white  rounded-md bg-slate-900 w-52"
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
                  <Link to="/newdashboard/adminDashboard">Dashboard</Link>
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

export default NewDashboard;
