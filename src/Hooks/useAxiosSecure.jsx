import axios from "axios";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://plant-world-server.vercel.app",
});
const useAxiosSecure = () => {
  // =================================================================
  const navigate = useNavigate();
  const { logOut } = UseAuth();
  // ====================Request interceptor to add authorization header for every secure call to the API=============================================
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      // console.log("Request stopped by interceptor", token);
      config.headers.authorization = `Bearer ${token}`;
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  // ====================Intercepts the 401 & 403 Status ==============================================================================================================================
  // interceptors 401 and 403 status
  axiosSecure.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to triggerp
      // Do something with response data
      return response;
    },
    async (error) => {
      const status = error.response.status;
      // console.log("Error in the interceptor: ", status);
      // for 401 or 403 logout the user and move the user to the login
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
    // {
    //   // Any status codes that falls outside the range of 2xx cause this function to trigger
    //   // Do something with response error
    // }
  );
  // =================================================================================================================================================================================
  return axiosSecure;
};

export default useAxiosSecure;
