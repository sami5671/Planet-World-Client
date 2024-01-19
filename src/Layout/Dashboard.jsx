import { useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import UseAdmin from "../Hooks/UseAdmin";
import UseCart from "../Hooks/UseCart";
import { FaCartShopping } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaTree } from "react-icons/fa";

import { MdLocalShipping } from "react-icons/md";

import { NavLink, Outlet, useNavigate } from "react-router-dom";
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
const Dashboard = () => {
  // =================================================================

  const [open, setOpen] = useState(true);
  const { user, logOut } = UseAuth();
  const [isAdmin] = UseAdmin();
  const [cart] = UseCart();
  const navigate = useNavigate();

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
      <div className="grid-container bg-slate-800">
        <Header OpenSidebar={OpenSidebar}></Header>
        <aside
          id="sidebar"
          className={openSidebarToggle ? "sidebar-responsive" : ""}
        >
          <ul className="sidebar-list bg-lime-50">
            <div className="sidebar-title bg-lime-50">
              <div className="sidebar-brand">
                <GiFruitTree className="text-5xl text-lime-600" />
                Plant World
              </div>
              <span className="icon close_icon" onClick={OpenSidebar}>
                X
              </span>
            </div>
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

            <NavLink to="/dashboard/shippingInfo">
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
            <li className="sidebar-list-item">
              <a href="">
                <BsListCheck className="icon" /> Inventory
              </a>
            </li>
            <li className="sidebar-list-item">
              <a href="">
                <BsMenuButtonWideFill className="icon" /> Reports
              </a>
            </li>
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
