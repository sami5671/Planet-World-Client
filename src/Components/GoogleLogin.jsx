import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import UseAuth from "../Hooks/UseAuth";
import { FaGooglePlusG } from "react-icons/fa";

const GoogleLogin = () => {
  const { googleSign } = UseAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleSign().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        photoURL: result.user?.photoURL,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="border-2 text-4xl text-green-500 bg-slate-100 shadow-xl p-1"
      >
        <FaGooglePlusG />
      </button>
    </div>
  );
};

export default GoogleLogin;
