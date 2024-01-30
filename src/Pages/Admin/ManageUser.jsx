import { useState } from "react";
import UseUser from "../../Hooks/UseUser";
import SectionTitle2 from "../../Components/SectionTitle2";
import { FaSearchengin, FaUserSlash } from "react-icons/fa";
import SectionTitlleUser from "../../Components/SectionTitlleUser";
import { FaUser } from "react-icons/fa6";
import { AiFillMediumCircle } from "react-icons/ai";

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";

const ManageUser = () => {
  //  =================================================================
  const { user } = UseAuth();
  const [users, refetch] = UseUser();
  // console.log(users);
  const [searchQuery, setSearchQuery] = useState("");
  const axiosSecure = useAxiosSecure();
  // console.log(users);
  // =================================================================
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredItems = users.filter((user) => {
    const nameLowerCase = user.name ? user.name.toLowerCase() : "";
    const emailLowerCase = user.email ? user.email.toLowerCase() : "";
    const roleLowerCase = user.role ? user.role.toLowerCase() : "";

    return (
      nameLowerCase.includes(searchQuery.toLowerCase()) ||
      emailLowerCase.includes(searchQuery.toLowerCase()) ||
      roleLowerCase.includes(searchQuery.toLowerCase())
    );
  });
  // ===========================Make Admin & Moderator ======================================
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      // console.log(res.data);
      if (res.data.modifiedCount > 0) {
        toast(`${user.name} Is Now Admin`);
        refetch();
      }
    });
  };

  const handleMakeModerator = (user) => {
    axiosSecure.patch(`/users/moderator/${user._id}`).then((res) => {
      // console.log(res.data);
      if (res.data.modifiedCount > 0) {
        toast(`${user.name} Is Now A Moderator`);
        refetch();
      }
    });
  };
  // ==============================Delete User===================================

  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/deleteUser/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            // console.log(res);
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  // =================================================================

  return (
    <section className="text-white bg-slate-900 ">
      <div className="mb-20">hello</div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      <SectionTitlleUser heading={"manage Users"}></SectionTitlleUser>
      {/* for search */}
      <div className="relative mb-6 flex items-end justify-end mr-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Name || Email || Role"
            className="lg:w-[420px] border-2 rounded-lg border-lime-400 text-xl font-bold text-lime-600 h-[35px] pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all duration-300"
            onChange={handleInputChange}
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearchengin className="text-slate-500" />
          </div>
        </div>
      </div>
      {/* for search */}
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead className="text-white">
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Photo</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Make Moderator</th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {filteredItems.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>
                  <div className="avatar">
                    <div className="rounded-full w-12 h-12">
                      <img src={user.photoURL} alt="img" />
                    </div>
                  </div>
                </td>
                <td>
                  <span className="text-[16px] font-bold">{user.email}</span>
                </td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="px-4 py-3 rounded-lg bg-cyan-500"
                    >
                      <FaUser className="text-white text-xl" />
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "moderator" ? (
                    <>
                      <button className="px-4 py-3 rounded-lg bg-white">
                        <AiFillMediumCircle className="text-orange-500 text-xl" />
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleMakeModerator(user)}
                      className="px-4 py-3 rounded-lg bg-cyan-500"
                    >
                      <FaUser className="text-white text-xl" />
                    </button>
                  )}
                </td>
                <td>
                  <button onClick={() => handleDeleteUser(user._id)}>
                    <span className="text-2xl text-red-600 hover:text-orange-500">
                      <FaUserSlash />
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageUser;
