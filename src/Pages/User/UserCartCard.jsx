import { FaTrash } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import UseCart from "../../Hooks/UseCart";

const UserCartCard = ({ items }) => {
  const { _id, name, img1, newPrice, previousPrice } = items;
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = UseCart();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <section className="bg-white px-2 py-2 lg:p-4 mb-4 flex items-center justify-between">
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
        <div className="ml-4 cursor-pointer flex gap-3">
          <button onClick={() => handleDelete(_id)}>
            <FaTrash />
          </button>
          <button>
            <FaRegHeart />
          </button>
        </div>
      </div>
    </section>
  );
};

export default UserCartCard;
