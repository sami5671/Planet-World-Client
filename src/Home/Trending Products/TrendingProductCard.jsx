import { FaCartShopping } from "react-icons/fa6";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import UseCart from "../../Hooks/UseCart";

const TrendingProductCard = ({ plants }) => {
  const { _id, name, previousPrice, newPrice, stock, img1 } = plants;
  const { user } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = UseCart();

  const handleAddToCart = (tree) => {
    if (user && user.email) {
      //   console.log(user.email, tree);
      // send cart item to the database
      const cartItem = {
        treeId: _id,
        email: user.email,
        name,
        newPrice,
        img1,
        previousPrice,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          // refetch the cart
          refetch();
          toast(`${name} Added to the cart`);
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged in",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { form: location } });
        }
      });
    }
  };
  return (
    <section>
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      <div className="w-[200px] font-Rancho rounded-lg shadow-2xl py-4 px-3 relative">
        <Link to={`/product/${_id}`}>
          <div className="flex justify-center items-center">
            <img src={img1} className="w-[150px] h-[150px] rounded-xl" alt="" />
          </div>
        </Link>
        <div className="pl-4">
          <Link to={`/product/${_id}`}>
            <h1 className="mt-2 relative hover:text-lime-600">
              <span className="text-2xl">{name}</span>
              <span className="badge absolute -top-5 right-0 bg-slate-400 text-white p-1">
                {stock}
              </span>
            </h1>
          </Link>
          <p className="">
            <span className="font-bold mr-2 text-2xl">$ {newPrice}</span>
            <del className="">${previousPrice}</del>
          </p>

          <button
            onClick={() => handleAddToCart(plants)}
            className="flex items-center gap-2 mt-2 text-white bg-lime-500 transition duration-300 ease-in-out hover:bg-lime-800 w-full px-8 rounded-tl-full rounded-br-full"
          >
            Add to Cart <FaCartShopping />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingProductCard;
