import { useNavigate } from "react-router-dom";
import { TfiWrite } from "react-icons/tfi";

import UseAuth from "../../Hooks/UseAuth";
import { MdOutlineBrowserUpdated } from "react-icons/md";

const UserDashboard = () => {
  // =================================================================
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  // =================================================================
  const { user, logOut } = UseAuth();
  const navigate = useNavigate();
  // =================================================================
  return (
    <div className="">
      {/* user info */}
      <div className="flex flex-col lg:flex-row lg:gap-24">
        <div className="text-white px-4 lg:ml-12">
          <img src={user.photoURL} className="w-[140px] rounded-full" alt="" />
          <h1 className="mt-2">
            <span className="font-bold text-[18px]">Name:</span>
            <span className="ml-2">{user.displayName}</span>
          </h1>
          <p>
            <span className="font-bold text-[18px]">Email:</span>
            <span className="hover:underline ml-2">{user.email}</span>
          </p>
          <p>
            <span className="font-bold text-[18px]">Shipping Address:</span>
          </p>
          <button
            onClick={handleLogOut}
            className="underline hover:text-lime-400 font-bold text-[15px]"
          >
            Logout
          </button>
        </div>

        <div className="bg-white mt-4 lg:mt-0 text-slate-500 rounded-lg px-12 lg:px-24">
          <h1 className="underline flex items-center gap-1 lg:text-xl">
            <MdOutlineBrowserUpdated />
            Update Your information
          </h1>

          <p className="mt-4">
            <form action="">
              <span>Name: </span>
              <input type="text" className="border-2" />
              <p className="mt-2">
                <span>
                  Shipping <br /> Address:
                </span>
                <input type="text" className="border-2 ml-2" />
              </p>
              <p className="mt-2">
                <span>About You:</span>
                <textarea
                  name=""
                  id=""
                  cols="23"
                  rows="2"
                  className="border-2 ml-2"
                ></textarea>
              </p>

              <div className="flex justify-end items-end">
                <button className="mt-6 mb-4 flex items-center gap-2 font-bold border-2 px-3 hover:text-lime-300">
                  <TfiWrite />
                  Update
                </button>
              </div>
            </form>
          </p>
        </div>
      </div>
      {/* user info */}
    </div>
  );
};

export default UserDashboard;
