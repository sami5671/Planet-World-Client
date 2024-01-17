import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Shared/ErrorPage";
import Home from "../Home/Home/Home";
import Login from "../Provider/Login/Login";
import SignUp from "../Provider/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import UserCart from "./../Pages/User/userCart";
import ProductDetails from "../Home/Trending Products/ProductDetails";
import Products from "../Home/All Products/Products";
import Weather from "../Home/Weather/Weather";
import UserDashboard from "../Pages/User/UserDashboard";
import ShippingInfo from "../Pages/User/ShippingInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allProduct",
        element: <Products></Products>,
      },
      {
        path: "/weather",
        element: <Weather></Weather>,
      },
      {
        path: "/product/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "userCart",
        element: <UserCart></UserCart>,
      },
      {
        path: "userDashboard",
        element: <UserDashboard></UserDashboard>,
      },
      {
        path: "shippingInfo",
        element: <ShippingInfo></ShippingInfo>,
      },
    ],
  },
]);
