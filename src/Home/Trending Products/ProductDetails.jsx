import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import SectionTitle from "./../../Components/SectionTitle";
import Rating from "react-rating";
import UseAuth from "../../Hooks/UseAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import UseCart from "../../Hooks/UseCart";
import { FaShoppingCart } from "react-icons/fa";

const ProductDetails = () => {
  // =================================================================
  const productDetails = useLoaderData();
  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [, refetch] = UseCart();
  const {
    _id,
    img1,
    img2,
    img3,
    img4,
    color,
    material,
    name,
    newPrice,
    previousPrice,
    plantType,
    rating,
    stock,
    description,
  } = productDetails;

  const [images, setImages] = useState({ img1, img2, img3, img4 });

  const [activeImg, setActiveImg] = useState(images.img1);

  // console.log(productDetails);
  // =================================================================
  const handleAddToCart = (tree) => {
    if (user && user.email) {
      //   console.log(user.email, tree);
      // send cart item to the database
      const cartItem = {
        treeId: _id,
        email: user.email,
        name,
        newPrice,
        previousPrice,
        img1,
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
  //   =================================================================
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
      <div>
        <h1 className="mb-12 lg:mb-16 text-white">hello</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 px-4 lg:px-12">
        {/* carousel image section*/}
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="flex flex-col gap-6">
            <img
              src={activeImg}
              alt=""
              className="w-full h-full aspect-square object-cover rounded-xl"
            />
            <div className="flex flex-row justify-between h-24">
              <img
                src={images.img1}
                alt=""
                className="w-16 h-16 lg:w-24 lg:h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImg(images.img1)}
              />
              <img
                src={images.img2}
                alt=""
                className="w-16 h-16 lg:w-24 lg:h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImg(images.img2)}
              />
              <img
                src={images.img3}
                alt=""
                className="w-16 h-16 lg:w-24 lg:h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImg(images.img3)}
              />
              <img
                src={images.img4}
                alt=""
                className="w-16 h-16 lg:w-24 lg:h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImg(images.img4)}
              />
            </div>
          </div>
        </div>
        {/* carousel image section*/}

        {/* tree information section */}
        <div className="lg:ml-4 text-[16px]">
          <h1 className="text-3xl font-bold lg:text-4xl">{name}</h1>
          <div className="divider"></div>
          <del className="text-[16px] font-Rancho">$ {previousPrice}</del>
          <span className="ml-2 text-5xl font-Rancho">${newPrice}</span>

          <p>
            <span className="text-xl font-bold mr-2">Rating:</span>
            <Rating
              emptySymbol={
                <img src="/src/assets/star-yellow.png" className="icon" />
              }
              fullSymbol={
                <img src="/src/assets/star-yellow.png" className="icon" />
              }
            />
          </p>
          <p>
            <span className="text-xl font-bold mr-1">Stock:</span> {stock}
          </p>
          <p>
            <span className="text-xl font-bold mr-1"> Plant Type:</span>
            {plantType}
          </p>
          <p>
            <span className="text-xl font-bold mr-1">Plant Color:</span> {color}
          </p>
          <p>
            <span className="text-xl font-bold mr-1">Material:</span> {material}
          </p>
          <button
            onClick={() => handleAddToCart(productDetails)}
            className="flex items-center gap-2 mt-2 bg-lime-600 transition duration-300 ease-in-out hover:bg-lime-800 px-4 py-1 rounded-md text-white font-bold"
          >
            <FaShoppingCart /> Add to Cart
          </button>
          <div className="divider"></div>
          <p>
            <span className="text-xl font-bold mr-1">About Plant:</span>
            <span className="text-slate-500">{description}</span>
          </p>
        </div>
        {/* tree information section */}

        {/* cart calculation  section*/}
        <div></div>
        {/* cart calculation  section*/}
      </div>

      {/* reviews section */}

      <SectionTitle
        heading={`${name} Reviews`}
        subHeading={"What Our Customer Say "}
      ></SectionTitle>
    </section>
  );
};

export default ProductDetails;
