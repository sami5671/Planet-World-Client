import { FaFacebookF } from "react-icons/fa";
import UseAuth from "./../../Hooks/UseAuth";
import { FaTree } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../../Components/GoogleLogin";
import GithubLogin from "../../Components/GithubLogin";

const Login = () => {
  // ----------------------------------------------------------------
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = UseAuth();

  const form = location.state?.form?.pathname || "/";
  // ----------------------------------------------------------------
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password).then((result) => {
      const user = result.user;
      navigate("/", { state: { form: location } });
      console.log(user);
    });
  };

  // ====================Adding the background Style=================
  const bgStyle = {
    backgroundImage: `url('/src/assets/banner.png')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
  };

  // ====================Adding the background Style=================
  return (
    <>
      <div className="" style={bgStyle}>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="flex-shrink-0 w-full rounded-2xl mt-16  shadow-2xl lg:px-28">
              {/* ============ */}
              <div className="px-8 mt-8">
                <span className="flex justify-center text-lime-500 text-3xl lg:text-6xl">
                  <FaTree />
                </span>
                <div>
                  <h1 className="text-2xl font-bold text-slate-500 mb-4">
                    Already have an account?
                  </h1>
                  <p className="text-[14px] font-bold text-slate-500">
                    Use Social Media Credentials
                  </p>
                </div>
                <div className="flex justify-center gap-6 mt-6">
                  <GoogleLogin></GoogleLogin>
                  <GithubLogin></GithubLogin>
                  <p className="border-2 text-4xl text-blue-500 bg-slate-200 shadow-xl p-1">
                    <FaFacebookF />
                  </p>
                </div>
              </div>

              <div className="divider mt-8">OR</div>
              {/* ============= */}

              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-slate-500">
                      User Email*
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    // {...register("email", { required: true })}
                    placeholder="email"
                    className="p-2 border-2"
                    required
                  />
                  {/* {errors.email && ( */}
                  <span className="text-red-400">Email field is required</span>
                  {/* )} */}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-slate-500">
                      Password*
                    </span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    // {...register("password", {
                    //   required: "Password is required",
                    //   validate: (value) =>
                    //     isPasswordValid(value) ||
                    //     "Password must be one uppercase, one lowercase & one special character ",
                    // })}
                    placeholder="password"
                    className="p-2 border-2"
                    required
                  />
                  {/* {errors.password && (
                  <span className="text-red-400">
                    {errors.password.message}
                  </span>
                )} */}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="mt-6">
                  <input
                    className="py-2 w-full bg-lime-300 border-2 font-bold text-black hover:bg-white hover:text-black cursor-pointer"
                    type="submit"
                    value="Login"
                  />
                </div>
                <div>
                  <p className="text-[16px]">
                    Don't Have an account?
                    <Link to="/signup">
                      <span className="text-[12px] ml-2 underline text-blue-600 font-bold">
                        SignUp
                      </span>
                    </Link>
                  </p>
                  <p className="text-[12px]">
                    For any issues or assistance, email
                    <a href="" className="underline ml-2 text-blue-500">
                      samialam5671@gmail.com
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
