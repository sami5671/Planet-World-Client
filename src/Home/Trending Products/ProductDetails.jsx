import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  // =================================================================
  const productDetails = useLoaderData();
  console.log(productDetails);
  // =================================================================
  return (
    <section>
      <div>
        {/* carousel image section*/}
        <div></div>
        {/* carousel image section*/}

        {/* tree information section */}
        <div></div>
        {/* tree information section */}

        {/* cart calculation  section*/}
        <div></div>
        {/* cart calculation  section*/}
      </div>
    </section>
  );
};

export default ProductDetails;
