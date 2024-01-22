import { useState } from "react";
import UseUser from "../../Hooks/UseUser";

const ManageUser = () => {
  //  =================================================================

  const [users] = UseUser();
  const [searchQuery, setSearchQuery] = useState("");

  console.log(users);
  // =================================================================
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (plant) =>
      plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.plantType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // =================================================================

  return <div className="text-white lg:ml-52 mb-24"></div>;
};

export default ManageUser;
