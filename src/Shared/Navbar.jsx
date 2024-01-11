import { GiFruitTree } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
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
        <a className="hidden lg:block bg-gradient-to-br from-lime-400 to-green-800 text-transparent bg-clip-text font-Rancho font-bold text-2xl">
          Planet World
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="font-Rancho mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box border-2 border-lime-300 w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
