import { IoInformationCircle } from "react-icons/io5";

import { Link } from "react-router-dom";

const OrderDetailsCard = ({ items }) => {
  const { img1, name, newPrice, previousPrice, treeId } = items;
  return (
    <section className="bg-white text-black px-2 py-2 lg:p-4 mb-4 flex items-center justify-between">
      {/* Left side with image and name */}
      <div className="flex items-center">
        <img src={img1} className="w-16 h-16 object-cover rounded" alt={name} />
        <div className="ml-4">
          <h1 className="text-lg font-semibold">{name}</h1>
        </div>
      </div>

      {/* Right side with price, previous price, and delete icon */}
      <div className="flex items-center">
        <div className="flex flex-col text-right ml-4">
          <p className="text-lg font-bold">${newPrice}</p>
          {previousPrice && (
            <del className="text-sm text-gray-500">${previousPrice}</del>
          )}
        </div>
        <div className="ml-4 mr-2 cursor-pointer flex gap-3">
          <Link to={`/product/${treeId}`}>
            <td>
              <span className="text-4xl hover:text-lime-500 text-center">
                <IoInformationCircle />
              </span>
            </td>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderDetailsCard;
