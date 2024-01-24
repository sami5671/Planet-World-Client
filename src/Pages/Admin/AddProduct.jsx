import { GiTreehouse } from "react-icons/gi";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  // =================================================================
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  // =================================================================
  const onSubmit = async (data) => {
    const imageFile = new FormData();
    imageFile.append("image", data.photoURL[0]);
    const imageRes = await axiosPublic.post(image_hosting_api, imageFile);
    const imageUrl1 = imageRes.data.data.url;
    try {
      const addProduct = {
        name: data.treeName,
        previousPrice: data.previousPrice,
        newPrice: data.newPrice,
        stock: data.stock,
        rating: data.rating,
        color: data.color,
        plantType: data.plantType,
        material: data.material,
        description: data.description,
        img1: imageUrl1,
      };
      // console.log(addProduct);
      const res = await axiosSecure.post("/addProduct", addProduct);
      if (res.data.insertedId) {
        Swal.fire("The Product has been added successfully");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
  // =================================================================
  return (
    <section>
      <div className="mb-16">hello</div>
      <div className="bg-slate-900 text-white p-4">
        <h2 className="text-3xl md:text-5xl font-extrabold font-rancho text-center mb-12">
          <span className="flex items-center justify-center">
            <GiTreehouse />
          </span>
          Add Product
        </h2>
        <span>
          {/* <img src="" className="rounded-full w-[50px] h-[50px]" alt="" /> */}
        </span>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-black font-bold"
        >
          {/* product details */}
          <div className="mb-4 md:flex">
            <div className="form-control mb-4 md:w-1/2 md:mr-2">
              <label className="label">
                <span className="text-white">Tree Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  {...register("treeName", { required: true })}
                  placeholder="Tree Name"
                  className="input input-bordered w-full"
                />
              </label>
              {errors.treeName && (
                <p className="text-red-500">Tree Name is required</p>
              )}
            </div>
            <div className="form-control mb-4 md:w-1/2 md:mr-2">
              <label className="label">
                <span className="text-white">Previous Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  {...register("previousPrice", { required: true })}
                  placeholder="Product price"
                  className="input input-bordered w-full"
                />
              </label>
              {errors.treeName && (
                <p className="text-red-500">Tree previousPrice is required</p>
              )}
            </div>
            <div className="form-control mb-4 md:w-1/2 md:mr-2">
              <label className="label">
                <span className="text-white">New Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  {...register("newPrice", { required: true })}
                  placeholder="Product price"
                  className="input input-bordered w-full"
                />
              </label>
              {errors.treeName && (
                <p className="text-red-500">Tree New Price is required</p>
              )}
            </div>
            <div className="form-control mb-4 md:w-1/2 md:mr-2">
              <label className="label">
                <span className="text-white">Plant Type</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  {...register("plantType", { required: true })}
                  placeholder="Product type"
                  className="input input-bordered w-full"
                />
              </label>
              {errors.treeName && (
                <p className="text-red-500">Tree Type is required</p>
              )}
            </div>
            <div className="form-control mb-4 md:w-1/2 md:mr-2">
              <label className="label">
                <span className="text-white">Plant Material</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  {...register("material", { required: true })}
                  placeholder="Product Material"
                  className="input input-bordered w-full"
                />
              </label>
              {errors.treeName && (
                <p className="text-red-500">Tree Material is required</p>
              )}
            </div>
            <div className="form-control mb-4 md:w-1/2 md:mr-2">
              <label className="label">
                <span className="text-white">Plant Color</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  {...register("color", { required: true })}
                  placeholder="Product Color"
                  className="input input-bordered w-full"
                />
              </label>
              {errors.treeName && (
                <p className="text-red-500">Tree Color is required</p>
              )}
            </div>
            <div className="form-control mb-4 md:w-1/2 md:mr-2">
              <label className="label">
                <span className="text-white">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  {...register("category", { required: true })}
                  placeholder="Product Category"
                  className="input input-bordered w-full"
                />
              </label>
              {errors.treeName && (
                <p className="text-red-500">Tree Category is required</p>
              )}
            </div>
          </div>
          {/* image section */}

          <div className="mb-4 md:flex">
            <div className="form-control mb-4 md:w-1/2 md:mr-2">
              <label className="label">
                <span className="text-white">Image 1</span>
              </label>
              <label className="input-group">
                <input
                  type="file"
                  multiple={true}
                  {...register("photoURL", { required: true })}
                  placeholder="photoURL"
                  className="input input-bordered w-full text-red-700"
                />
              </label>
              {errors.treeName && (
                <p className="text-red-500">Tree img 1 is required</p>
              )}
            </div>

            {/* <div className="form-control mb-4 md:w-1/2 md:mr-2">
              <label className="label">
                <span className="text-white">Image 2</span>
              </label>
              <label className="input-group">
                <input
                  type="file"
                  {...register("photoURL2", { required: true })}
                  placeholder="photoURL"
                  className="input input-bordered w-full text-red-700"
                />
              </label>
              {errors.treeName && (
                <p className="text-red-500">Tree img 2 is required</p>
              )}
            </div>
            <div className="form-control mb-4 md:w-1/2 md:mr-2">
              <label className="label">
                <span className="text-white">Image 3</span>
              </label>
              <label className="input-group">
                <input
                  type="file"
                  {...register("photoURL3", { required: true })}
                  placeholder="photoURL"
                  className="input input-bordered w-full text-red-700"
                />
              </label>
              {errors.treeName && (
                <p className="text-red-500">Tree img 3 is required</p>
              )}
            </div>
            <div className="form-control mb-4 md:w-1/2 md:mr-2">
              <label className="label">
                <span className="text-white">Image 4</span>
              </label>
              <label className="input-group">
                <input
                  type="file"
                  {...register("photoURL4", { required: true })}
                  placeholder="photoURL"
                  className="input input-bordered w-full text-red-700"
                />
              </label>
              {errors.treeName && (
                <p className="text-red-500">Tree img 4 is required</p>
              )}
            </div> */}
          </div>

          {/* Review Description and Rating of the product row */}
          <div className="mb-4 md:flex">
            <div className="form-control mb-4 md:w-1/2 md:mr-2">
              <label className="label">
                <span className="text-white">Tree Stock</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  {...register("stock", { required: true })}
                  placeholder="Product Stock"
                  className="input input-bordered w-full"
                />
              </label>
              {errors.treeName && (
                <p className="text-red-500">Tree Stock 1 is required</p>
              )}
            </div>
            <div className="form-control mb-4 md:w-1/2 md:mr-2">
              <label className="label">
                <span className="text-white">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  {...register("rating", { required: true })}
                  placeholder="Product Rating"
                  className="input input-bordered w-full"
                />
              </label>
              {errors.treeName && (
                <p className="text-red-500">Tree rating is required</p>
              )}
            </div>
          </div>
          {/* ============== */}
          <div className="mb-4 md:flex">
            <div className="form-control mb-4 md:w-full md:mr-2">
              <label className="label">
                <span className="text-white">Product Description </span>
              </label>
              <label className="input-group">
                <textarea
                  {...register("description", { required: true })}
                  placeholder="Write Product Description here......."
                  className="input input-bordered lg:w-2/3 h-32"
                ></textarea>
              </label>
              {errors.treeName && (
                <p className="text-red-500">Tree description is required</p>
              )}
            </div>
          </div>
          {/* ============== */}
          <input
            type="submit"
            value="Add Product"
            className="btn btn-block mb-12 bg-lime-800 lg:text-2xl text-white hover:text-black"
          />
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
