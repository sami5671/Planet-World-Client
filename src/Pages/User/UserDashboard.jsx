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
    <section>
      <div></div>
    </section>
  );
};

export default UserDashboard;
