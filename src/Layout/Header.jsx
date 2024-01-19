import { BsJustify } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

import UseAuth from "./../Hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";

const Header = ({ OpenSidebar }) => {
  // =================================================================
  const { user, logOut } = UseAuth();
  const [isAdmin] = UseAdmin();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout error:", error);
        navigate("/");
      });
  };

  // =================================================================
  return (
    <header className="header text-white">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <BsSearch className="icon" />
      </div>
      <div className="hidden lg:block">
        {isAdmin ? (
          <>
            <div className="font-bold text-[12px] lg:text-xl">
              ~~~Admin Panel~~~
            </div>
          </>
        ) : (
          <>
            <div className="font-bold text-[12px] lg:text-xl">
              ~~~User Dashboard~~~
            </div>
          </>
        )}
      </div>

      <div className="header-right">
        <span>
          <img src={user.photoURL} className="rounded-full w-8" alt="" />
        </span>
        <button
          onClick={handleLogOut}
          className="hover:underline hover:text-slate-500 text-[14px]"
        >
          LogOut
        </button>
      </div>
    </header>
  );
};

export default Header;
