import MenuItem from "./MenuItem";
import { PiUsersThreeFill } from "react-icons/pi";
import { GiTreeGrowth } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
const AdminMenu = () => {
  return (
    <div>
      <MenuItem
        icon={MdDashboard}
        label="Dashboard"
        address="admin-dashboard"
      />
      <MenuItem icon={GiTreeGrowth} label="Add Product" address="add-product" />
      <MenuItem
        icon={PiUsersThreeFill}
        label="Manage Users"
        address="manage-users"
      />

      <hr />
    </div>
  );
};

export default AdminMenu;
