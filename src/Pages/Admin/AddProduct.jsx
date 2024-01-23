import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AiOutlineEdit } from "react-icons/ai";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddProduct = () => {
  // =================================================================

  const axiosSecure = useAxiosSecure();
  //   const navigate = useNavigate();
  // ==========================imgbb host=======================================
  const handleAddProduct = async (event) => {
    event.preventDefault();

    const form = event.target;
    const ProductName = form.ProductName.value;
    const ProductPhoto = form.ProductPhotoURL.files[0];
    const ProductDescription = form.ProductDescription.value;
    const ProductOwnerName = form.productOwnerName.value;
    const ProductOwnerPhoto = form.ProductOwnerPhoto.value;
    const ProductOwnerEmail = form.ProductOwnerEmail.value;

    const ProductTag = form.productTag.value;
    const ProductExternalLink = form.productExternalLink.value;

    try {
      const imageFile = new FormData();
      imageFile.append("image", ProductPhoto);
      const imageRes = await axiosSecure.post(image_hosting_api, imageFile);
      const imageUrl = imageRes.data.data.url;

      // send data to imgbb

      const AddProduct = {
        ProductName: ProductName,
        ProductPhoto: imageUrl,
        ProductDescription: ProductDescription,
        ProductOwnerName: ProductOwnerName,
        ProductOwnerPhoto: ProductOwnerPhoto,
        ProductOwnerEmail: ProductOwnerEmail,
        ProductTag: ProductTag,
        ProductExternalLink: ProductExternalLink,
      };
      // Add product data to mongodb
      const res = await axiosSecure.post("/addProduct", AddProduct);
      if (res.data.insertedId) {
        Swal.fire("The Product has been added successfully");
        // navigate("/dashboard/myProduct");
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
            <AiOutlineEdit />
          </span>
          Add Product
        </h2>
        <span>
          {/* <img src="" className="rounded-full w-[50px] h-[50px]" alt="" /> */}
        </span>
        <form onSubmit={handleAddProduct} className="text-black font-bold">
          {/* product details */}
          <div className="mb-4 md:flex">
            <div className="form-control mb-4 md:w-1/2 md:mr-2">
              <label className="label">
                <span className="text-white">Tree Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="treeName"
                  placeholder="Product Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control mb-4 md:w-1/2 md:mr-2">
              <label className="label">
                <span className="text-white">Previous Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="previousPrice"
                  placeholder="Product price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control mb-4 md:w-1/2 md:mr-2">
              <label className="label">
                <span className="text-white">New Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="newPrice"
                  placeholder="Product price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control mb-4 md:w-1/2 md:mr-2">
              <label className="label">
                <span className="text-white">Plant Type</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="treeType"
                  placeholder="Product type"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control mb-4 md:w-1/2 md:mr-2">
              <label className="label">
                <span className="text-white">Plant Material</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="material"
                  placeholder="Product Material"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control mb-4 md:w-1/2 md:mr-2">
              <label className="label">
                <span className="text-white">Plant Color</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="color"
                  placeholder="Product Color"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control mb-4 md:w-1/2 md:mr-2">
              <label className="label">
                <span className="text-white">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  placeholder="Product Category"
                  className="input input-bordered w-full"
                />
              </label>
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
                  name="ProductPhotoURL"
                  placeholder="photoURL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control mb-4 md:w-1/2 md:mr-2">
              <label className="label">
                <span className="text-white">Image 2</span>
              </label>
              <label className="input-group">
                <input
                  type="file"
                  name="ProductPhotoURL"
                  placeholder="photoURL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control mb-4 md:w-1/2 md:mr-2">
              <label className="label">
                <span className="text-white">Image 3</span>
              </label>
              <label className="input-group">
                <input
                  type="file"
                  name="ProductPhotoURL"
                  placeholder="photoURL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control mb-4 md:w-1/2 md:mr-2">
              <label className="label">
                <span className="text-white">Image 4</span>
              </label>
              <label className="input-group">
                <input
                  type="file"
                  name="ProductPhotoURL"
                  placeholder="photoURL"
                  className="input input-bordered w-full text-red-700"
                />
              </label>
            </div>
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
                  name="stock"
                  placeholder="Product Stock"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control mb-4 md:w-1/2 md:mr-2">
              <label className="label">
                <span className="text-white">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  placeholder="Product Rating"
                  className="input input-bordered w-full"
                />
              </label>
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
                  name="description"
                  placeholder="Write Product Description here......."
                  className="input input-bordered lg:w-2/3 h-32"
                ></textarea>
              </label>
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
