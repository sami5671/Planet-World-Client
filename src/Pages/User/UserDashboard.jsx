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
    <section className="text-black">
      <div>
        helllo Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
        magni quasi odio nam, ullam et sed omnis suscipit molestias quae. Saepe
        debitis excepturi harum assumenda aperiam repellat illum praesentium
        libero!
      </div>
    </section>
  );
};

export default UserDashboard;
