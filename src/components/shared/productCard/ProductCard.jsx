import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductCard = () => {
  return (
    <>
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
        <div className="w-[160px] h-full lg:w-[210px] font-Rancho rounded-lg shadow-2xl py-4 lg:px-3 relative bg-primary-backgroundColor">
          {/* <Link to={`/product/${_id}`}> */}
          <Link>
            <div className="flex justify-center items-center">
              <img
                // src={img1}
                className="w-[150px] h-[150px] rounded-xl"
                alt=""
              />
            </div>
          </Link>
          <div className="p-2">
            {/* <Link to={`/product/${_id}`}> */}
            <Link>
              <h1 className="mt-2 relative hover:text-lime-600">
                <span className="text-2xl">Bonsai tree</span>
                <span className="badge absolute -top-5 right-0 bg-slate-400 text-white p-1">
                  In stock
                </span>
              </h1>
            </Link>
            <p className="">
              <span className="font-bold mr-2 text-2xl">$ 12.00</span>
              <del className="">$ 30.00</del>
            </p>

            <button
              //   onClick={() => handleAddToCart(plants)}
              className="flex items-center gap-2 mt-2 text-white bg-lime-500 transition duration-300 ease-in-out hover:bg-lime-800 w-full px-3 lg:px-8 rounded-tl-full rounded-br-full"
            >
              Add to Cart <FaCartShopping />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCard;
