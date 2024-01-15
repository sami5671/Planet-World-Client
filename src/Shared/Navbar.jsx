import { FaCartShopping } from "react-icons/fa6";
import { GiFruitTree } from "react-icons/gi";
import UseAuth from "./../Hooks/UseAuth";
import { Link } from "react-router-dom";
import UseCart from "../Hooks/UseCart";

const Navbar = () => {
  // =================================================================

  const { user, logOut } = UseAuth();
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
        <div className="dropdown">
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
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Product</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
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
          <Link to="/dashboard/UserCart">
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
        <div className="form-control">
          <input
            type="text"
            placeholder="Search tree name"
            className="input input-bordered w-24 md:w-auto"
          />
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
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <Link to="/dashboard">Dashboard </Link>
            </li>
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
