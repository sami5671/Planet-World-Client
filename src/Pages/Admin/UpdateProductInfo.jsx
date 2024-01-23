import { useLoaderData } from "react-router-dom";

const UpdateProductInfo = () => {
  // =================================================================================================================
  const productDetails = useLoaderData();
  // console.log(productDetails);
  const {
    name,
    previousPrice,
    newPrice,
    stock,
    rating,
    color,
    plantType,
    material,
    description,
    category,
    img1,
    img2,
    img3,
    img4,
  } = productDetails;

  const handleUpdateSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.treeName.value;
    const previousPrice = form.previousPrice.value;
    const newPrice = form.newPrice.value;
    const plantType = form.treeType.value;
    const material = form.material.value;
    const color = form.color.value;

    const category = form.category.value;
    const stock = form.stock.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const updateProduct = {
      name,
      previousPrice,
      newPrice,
      plantType,
      material,
      color,
      category,
      stock,
      rating,
      description,
      img1,
      img2,
      img3,
      img4,
    };
    console.log(updateProduct);
  };
  // =================================================================================================
  return (
    <section>
      <div className="mb-16">hello</div>
      <div className="bg-slate-900 text-white p-4">
        <h2 className="text-3xl md:text-5xl font-extrabold font-rancho text-center mb-12">
          Update
          <br />({name})
        </h2>
        <span>
          <img src={img1} className="rounded-full w-[50px] h-[50px]" alt="" />
        </span>
        <form onSubmit={handleUpdateSubmit} className="text-black font-bold">
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
                  defaultValue={name}
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
                  defaultValue={`$${previousPrice}`}
                  placeholder="Product Name"
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
                  defaultValue={`$${newPrice}`}
                  placeholder="Product Name"
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
                  defaultValue={plantType}
                  placeholder="Product Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="mb-4 md:flex">
            <div className="form-control mb-4 md:w-1/2 md:mr-2">
              <label className="label">
                <span className="text-white">Plant Material</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="material"
                  defaultValue={material}
                  placeholder="Product Name"
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
                  defaultValue={color}
                  placeholder="Product Name"
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
                  defaultValue={category}
                  placeholder="Product Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control mb-4 md:w-1/2 md:mr-2">
              <label className="label">
                <span className="text-white">Tree Stock</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="stock"
                  defaultValue={stock}
                  placeholder="Product External Link"
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
                  defaultValue={rating}
                  placeholder="Product External Link"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* image section */}

          {/* <div className="mb-4 md:flex">
            <div className="form-control mb-4 md:w-1/2 md:mr-2">
              <label className="label">
                <span className="text-white">Image 1</span>
              </label>
              <label className="input-group">
                <input
                  type="file"
                  name="ProductPhotoURL"
                  defaultValue={img1}
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
                  defaultValue={img2}
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
                  defaultValue={img3}
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
                  defaultValue={img4}
                  placeholder="photoURL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div> */}
          {/* Review Description and Rating of the product row */}
          {/* ============== */}
          <div className="mb-4 md:flex">
            <div className="form-control mb-4 md:w-full md:mr-2">
              <label className="label">
                <span className="text-white">Product Description </span>
              </label>
              <label className="input-group">
                <textarea
                  name="description"
                  defaultValue={description}
                  placeholder="Write Product Description here......."
                  className="input input-bordered lg:w-2/3 h-32"
                ></textarea>
              </label>
            </div>
          </div>
          {/* ============== */}
          <input
            type="submit"
            value="Update Product"
            className="btn btn-block mb-12 bg-lime-800 text-white hover:text-black"
          />
        </form>
      </div>
    </section>
  );
};

export default UpdateProductInfo;
