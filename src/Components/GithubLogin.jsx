import { FaGithub } from "react-icons/fa";
import UseAuth from "../Hooks/UseAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const GithubLogin = () => {
  const { gitHubSign } = UseAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGitHubLogin = () => {
    gitHubSign().then((result) => {
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
        onClick={handleGitHubLogin}
        className="border-2 text-4xl bg-slate-200 shadow-xl p-1"
      >
        <FaGithub />
      </button>
    </div>
  );
};

export default GithubLogin;
