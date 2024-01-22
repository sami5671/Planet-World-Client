import { useLoaderData } from "react-router-dom";

const UpdateProductInfo = () => {
  // =================================================================================================================
  const productDetails = useLoaderData();
  console.log(productDetails);

  // =================================================================================================
  return (
    <section>
      <div className="bg-lime-50 p-4">
        <h2 className="text-3xl md:text-5xl font-extrabold font-rancho text-[#374151] text-center mb-12">
          Update the Gadget <br />
          {/* ({ProductName}) */}
        </h2>
        <form>
          {/* Reviewer Name and Reviewer PhotoURL row */}
          <div className="mb-4 md:flex">
            <div className="form-control mb-4 md:w-1/2 md:mr-2">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="ProductName"
                  // defaultValue={ProductName}
                  placeholder="Product Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product PhotoURL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="ProductPhotoURL"
                  // defaultValue={ProductPhoto}
                  readOnly
                  placeholder="photoURL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* Review Description and Rating of the product row */}
          <div className="mb-4 md:flex">
            <div className="form-control mb-4 md:w-full md:mr-2">
              <label className="label">
                <span className="label-text">Product Description </span>
              </label>
              <label className="input-group">
                <textarea
                  name="ProductDescription"
                  // defaultValue={ProductDescription}
                  placeholder="Write Product Description here......."
                  className="input input-bordered w-full h-40 md:h-auto"
                ></textarea>
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product Tag</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="productTag"
                  // defaultValue={ProductTag}
                  placeholder="Product Tag"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* ============== */}
          <div className="mb-4 md:flex">
            <div className="form-control mb-4 md:w-1/2 md:mr-2">
              <label className="label">
                <span className="label-text">External Links</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="productExternalLink"
                  // defaultValue={ProductExternalLink}
                  placeholder="Product External Link"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* ============== */}
          <input
            type="submit"
            value="Update Product"
            className="btn btn-block bg-lime-800 text-white hover:text-black"
          />
        </form>
      </div>
    </section>
  );
};

export default UpdateProductInfo;
