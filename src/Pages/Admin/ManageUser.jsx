import { useState } from "react";
import UseUser from "../../Hooks/UseUser";
import SectionTitle2 from "../../Components/SectionTitle2";
import { FaSearchengin } from "react-icons/fa";
import SectionTitlleUser from "../../Components/SectionTitlleUser";

const ManageUser = () => {
  //  =================================================================

  const [users] = UseUser();
  const [searchQuery, setSearchQuery] = useState("");

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
  // =================================================================

  return (
    <section className="text-white bg-slate-900 ">
      <div className="mb-20">hello</div>
      <SectionTitlleUser heading={"manage Users"}></SectionTitlleUser>
      {/* for search */}
      <div className="relative mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Name || email || Role"
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
              <th>Role</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {filteredItems.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>
                  <div className="avatar">
                    <div className="rounded-full w-12 h-12">
                      <img src={item.photoURL} alt="img" />
                    </div>
                  </div>
                </td>
                <td>
                  <span className="text-[18px] font-bold">{item.email}</span>
                </td>
                <td>{item.role}</td>
                <td>Update</td>
                <td>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageUser;
