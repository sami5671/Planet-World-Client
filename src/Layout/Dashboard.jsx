import { useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import UseAdmin from "../Hooks/UseAdmin";
import UseCart from "../Hooks/UseCart";
import { FaCartShopping } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { RiReplay5Fill } from "react-icons/ri";
import { MdMessage } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa6";
import { MdAssignmentAdd } from "react-icons/md";
import { IoBagAddSharp } from "react-icons/io5";

import { FaTree } from "react-icons/fa";

import { MdLocalShipping } from "react-icons/md";

import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Header from "./Header";

import {
  BsCart3,
  BsFillArchiveFill,
  BsFillGearFill,
  BsFillGrid3X3GapFill,
  BsGrid1X2Fill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsPeopleFill,
} from "react-icons/bs";
import { GiFruitTree } from "react-icons/gi";
import UseUser from "../Hooks/UseUser";
import UseProduct from "../Hooks/UseProduct";
const Dashboard = () => {
  // =================================================================

  const [open, setOpen] = useState(true);
  const { user, logOut } = UseAuth();
  const navigate = useNavigate();

  const [users] = UseUser();
  const [isAdmin] = UseAdmin();
  const [cart] = UseCart();
  const [products] = UseProduct();

  // console.log(products);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  // console.log(isAdmin);
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  // =================================================================
  return (
    <>
      <div className="grid-container">
        <Header OpenSidebar={OpenSidebar}></Header>
        <aside
          id="sidebar"
          className={openSidebarToggle ? "sidebar-responsive" : ""}
        >
          <ul className="sidebar-list bg-slate-900 text-white">
            <div className="sidebar-title bg-slate-900">
              <Link to="/">
                <div className="sidebar-brand">
                  <GiFruitTree className="text-5xl text-lime-600" />
                  Plant World
                </div>
              </Link>
              <span className="icon close_icon" onClick={OpenSidebar}>
                X
              </span>
            </div>

            {isAdmin ? (
              <>
                <NavLink to="/dashboard/adminDashboard">
                  <li className="sidebar-list-item flex items-center gap-2">
                    <BsGrid1X2Fill /> Dashboard
                  </li>
                </NavLink>
                <NavLink to="/dashboard/manageProduct">
                  <li className="sidebar-list-item flex items-center gap-2">
                    <MdAssignmentAdd />
                    Manage Product
                    <span className="text-red-500 font-bold">
                      ({products.length})
                    </span>
                  </li>
                </NavLink>
                <NavLink to="/dashboard/manageUser">
                  <li className="sidebar-list-item flex items-center gap-2">
                    <MdManageAccounts />
                    Manage Users
                    <span className="text-red-500 font-bold">
                      ({users.length})
                    </span>
                  </li>
                </NavLink>
                <NavLink to="/dashboard/orderInfo">
                  <li className="sidebar-list-item flex items-center gap-2">
                    <IoBagAddSharp />
                    Order Info
                  </li>
                </NavLink>
                <div className="divider">Support</div>
                <NavLink to="/dashboard/messageSupportAdmin">
                  <li className="sidebar-list-item flex items-center gap-2">
                    <MdMessage />
                    Messages
                  </li>
                </NavLink>
                <NavLink to="/dashboard/productReplaceAdmin">
                  <li className="sidebar-list-item flex items-center gap-2">
                    <RiReplay5Fill />
                    Product Replace
                  </li>
                </NavLink>
                <div className="divider">OR</div>
                <NavLink to="/">
                  <li className="sidebar-list-item flex items-center gap-2">
                    <FaHome /> HomePage
                  </li>
                </NavLink>
                <NavLink to="/allProduct">
                  <li className="sidebar-list-item flex items-center gap-2">
                    <FaTree />
                    Products
                  </li>
                </NavLink>
                <NavLink to="/dashboard/userCart">
                  <li className="sidebar-list-item flex items-center gap-2">
                    <FaCartShopping />
                    My Cart
                    <span className="text-red-500 font-bold">
                      ({cart.length})
                    </span>
                  </li>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/dashboard/userDashboard">
                  <li className="sidebar-list-item flex items-center gap-2">
                    <BsGrid1X2Fill /> Dashboard
                  </li>
                </NavLink>
                <NavLink to="/dashboard/userCart">
                  <li className="sidebar-list-item flex items-center gap-2">
                    <FaCartShopping />
                    My Cart
                  </li>
                </NavLink>
                <NavLink to="/dashboard/shippingInfoUser">
                  <li className="sidebar-list-item flex items-center gap-2">
                    <MdLocalShipping />
                    Shipping Info
                  </li>
                </NavLink>
                <div className="divider">OR</div>
                <NavLink to="/">
                  <li className="sidebar-list-item flex items-center gap-2">
                    <FaHome /> HomePage
                  </li>
                </NavLink>
                <NavLink to="/products">
                  <li className="sidebar-list-item flex items-center gap-2">
                    <FaTree />
                    Products
                  </li>
                </NavLink>
                <div className="divider">Support</div>
                <NavLink to="/dashboard/messageSupportUser">
                  <li className="sidebar-list-item flex items-center gap-2">
                    <MdMessage /> Message Support
                  </li>
                </NavLink>
                <NavLink to="/dashboard/replaceProductUser">
                  <li className="sidebar-list-item flex items-center gap-2">
                    <RiReplay5Fill />
                    Replace your Product
                  </li>
                </NavLink>
              </>
            )}
            <li className="sidebar-list-item">
              <a href="">
                <BsFillGearFill className="icon" /> Setting
              </a>
            </li>
          </ul>
        </aside>
        <div className="">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
