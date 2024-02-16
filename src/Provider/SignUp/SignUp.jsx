import { FaFacebookF, FaTree } from "react-icons/fa";
import { useForm } from "react-hook-form";
import UseAuth from "../../Hooks/UseAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import GoogleLogin from "../../Components/GoogleLogin";
import GithubLogin from "../../Components/GithubLogin";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const SignUp = () => {
  // ----------------------------------------------------------------
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile } = UseAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const isPasswordValid = (password) => {
    // Add your password validation logic here
    // For example: at least one uppercase, one lowercase, and one special character
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    return (
      uppercaseRegex.test(password) &&
      lowercaseRegex.test(password) &&
      specialCharRegex.test(password)
    );
  };

  const onSubmit = async (data) => {
    const imageFile = { image: data.photoURL[0] };
    const imageRes = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const imageUrl = imageRes.data.data.display_url;

    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;

        updateUserProfile(data.name, imageUrl)
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email,
              photoURL: data.photoURL,
            };

            axiosPublic
              .post("/users", userInfo)
              .then((res) => {
                if (res.data.insertedId) {
                  reset();
                  Swal.fire("User created successfully");
                  navigate("/");
                } else {
                  Swal.fire("Error creating user entry in the database");
                }
              })
              .catch((error) => {
                console.error("Error creating user entry:", error.message);
                Swal.fire({
                  icon: "error",
                  title: "Error",
                  text: error.message,
                });
              });
          })
          .catch((error) => {
            console.error("Error updating user profile:", error.message);
            Swal.fire({
              icon: "error",
              title: "Error",
              text: error.message,
            });
          });
      })
      .catch((error) => {
        console.error("Error creating user:", error.message);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
        });
      });
  };
  // ----------------------------------------------------------------

  // ====================Adding the background Style=================
  const bgStyle = {
    backgroundImage: `url('https://i.ibb.co/g3RNsyL/banner.png')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
  };

  // ====================Adding the background Style=================

  return (
    <>
      <Helmet>
        <title>Planet World || SignUp</title>
      </Helmet>
      <div className="" style={bgStyle}>
        <div className="">
          <div className="hero-content flex-col lg:flex-row-reverse -mt-12">
            <div className="flex-shrink-0 w-full rounded-2xl shadow-2xl p-2 mt-16 lg:px-28">
              {/* ============ */}
              <div className="px-8 mt-8">
                <div>
                  <span className="flex justify-center text-lime-500 text-3xl lg:text-6xl">
                    <FaTree />
                  </span>
                  <h1 className="text-2xl font-bold text-slate-500 mb-4">
                    Create Your User Account
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

              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-slate-500">
                      UserName*
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="name"
                    className="p-2 border-2"
                    required
                  />
                  {errors.name && (
                    <span className="text-red-400">name field is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    type="file"
                    {...register("photoURL", { required: true })}
                    placeholder="photo URL"
                    className="p-2 border-2"
                    required
                  />
                  {errors.photoURL && (
                    <span className="text-red-400">photoURL is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="email"
                    className="p-2 border-2"
                    required
                  />
                  {errors.email && (
                    <span className="text-red-400">
                      Email field is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                      validate: (value) =>
                        isPasswordValid(value) ||
                        "Password must be one uppercase, one lowercase & one special character ",
                    })}
                    placeholder="password"
                    className="p-2 border-2"
                    required
                  />
                  {errors.password && (
                    <span className="text-red-400">
                      {errors.password.message}
                    </span>
                  )}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="mt-6">
                  <input
                    className="w-full py-2 bg-lime-300 border-2 text-black font-bold hover:bg-white hover:text-black cursor-pointer"
                    type="submit"
                    value="Register"
                  />
                </div>
                <div>
                  <p className="text-[12px]">
                    For any issues or assistance, email
                    <a href="" className="underline ml-2 text-blue-500">
                      samialam5671@gmail.com
                    </a>
                    <Link to="/login">
                      <span className="text-[16px] ml-2 hover:underline text-blue-600 font-bold">
                        SignIn
                      </span>
                    </Link>
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

export default SignUp;
