import { FaCartShopping } from "react-icons/fa6";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { GiFruitTree } from "react-icons/gi";
import UseAuth from "./../Hooks/UseAuth";
import { Link, NavLink } from "react-router-dom";
import UseCart from "../Hooks/UseCart";
import UseAdmin from "../Hooks/UseAdmin";

const Navbar = () => {
  // =================================================================

  const { user, logOut } = UseAuth();
  const [isAdmin] = UseAdmin();
  const [cart] = UseCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  // =================================================================
  return (
    <div className="navbar bg-[#f4f3f1] fixed z-10 ">
      <div className="navbar-start">
        <div className="dropdown block lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="font-Rancho menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box border-2 border-lime-300 w-52"
          >
            <Link to="/">
              <li>
                <a>Homepage</a>
              </li>
            </Link>
            <Link to="/allProduct">
              <li>
                <a>Product</a>
              </li>
            </Link>
            <li>
              <a>About Us</a>
            </li>
            <Link to="/weather">
              <li className="hover:underline hover:text-lime-400">
                <a>
                  <span className="flex gap-1 items-center">
                    Weather
                    <TiWeatherPartlySunny />
                  </span>
                </a>
              </li>
            </Link>
            {user ? (
              " "
            ) : (
              <Link to="/login">
                <li>
                  <a>Login</a>
                </li>
              </Link>
            )}
          </ul>
        </div>
        {/*  */}
        <div className="hidden lg:block">
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
        </div>
        {/*  */}
        <span className="block lg:hidden">
          <GiFruitTree className="text-2xl text-lime-600" />
        </span>
      </div>

      <div className="flex-1 gap-2">
        <span className="hidden lg:block">
          <GiFruitTree className="text-2xl text-lime-600" />
        </span>
        <a className="hidden lg:block bg-gradient-to-br from-lime-400 to-green-700 text-transparent bg-clip-text font-Rancho font-bold text-2xl">
          Plant World
        </a>
        <div>
          <Link to="/newdashboard/UserCart">
            <span>
              <FaCartShopping className="text-2xl mr-6 lg:text-3xl text-lime-500 lg:mr-2" />
              <span className="badge absolute -mt-10 ml-2 lg:ml-5 text-red-600 font-bold">
                {cart.length}
              </span>
            </span>
          </Link>
        </div>
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
            className="font-Rancho mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box border-2 border-lime-300 w-52"
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
              <li>
                <Link to="/newdashboard/adminDashboard">Dashboard</Link>
              </li>
            ) : (
              <li>
                <Link to="/newdashboard/userDashboard">Dashboard</Link>
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
  );
};

export default Navbar;
