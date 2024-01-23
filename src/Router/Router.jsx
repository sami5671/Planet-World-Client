import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Shared/ErrorPage";
import Home from "../Home/Home/Home";
import Login from "../Provider/Login/Login";
import SignUp from "../Provider/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import UserCart from "./../Pages/User/userCart";
import ProductDetails from "../Home/Trending Products/ProductDetails";
import Products from "../Home/All Products/Products";
import Weather from "../Home/Weather/Weather";
import UserDashboard from "../Pages/User/UserDashboard";
import ShippingInfo from "../Pages/User/ShippingInfo";
import AdminRoute from "./AdminRoute";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
import ManageUser from "../Pages/Admin/ManageUser";
import OrderInfo from "../Pages/Admin/OrderInfo";
import MessageSupportAdmin from "../Pages/Admin/MessageSupportAdmin";
import ProductReplaceAdmin from "../Pages/Admin/ProductReplaceAdmin";
import Dashboard from "../Layout/Dashboard";
import MessageSupportUser from "../Pages/User/MessageSupportUser";
import ReplaceProductUser from "../Pages/User/ReplaceProductUser";
import ManageProduct from "../Pages/Admin/ManageProduct";
import UpdateProductInfo from "../Pages/Admin/UpdateProductInfo";
import AddProduct from "../Pages/Admin/AddProduct";

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
  // NORMAL USER ROUTES
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
        path: "shippingInfoUser",
        element: <ShippingInfo></ShippingInfo>,
      },
      {
        path: "messageSupportUser",
        element: <MessageSupportUser></MessageSupportUser>,
      },
      {
        path: "replaceProductUser",
        element: <ReplaceProductUser></ReplaceProductUser>,
      },
    ],
  },
  // ADMIN ROUTES
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <Dashboard></Dashboard>
      </AdminRoute>
    ),
    children: [
      {
        path: "adminDashboard",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "manageProduct",
        element: <ManageProduct></ManageProduct>,
      },
      {
        path: "manageUser",
        element: <ManageUser></ManageUser>,
      },
      {
        path: "orderInfo",
        element: <OrderInfo></OrderInfo>,
      },
      {
        path: "messageSupportAdmin",
        element: <MessageSupportAdmin></MessageSupportAdmin>,
      },
      {
        path: "productReplaceAdmin",
        element: <ProductReplaceAdmin></ProductReplaceAdmin>,
      },
      {
        path: "updateProduct/:id",
        element: <UpdateProductInfo></UpdateProductInfo>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
    ],
  },

  // development section
]);
