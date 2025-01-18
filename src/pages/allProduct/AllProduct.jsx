import { useEffect } from "react";
import ProductCard from "../../components/shared/productCard/ProductCard";
import { useGetProductsQuery } from "../../features/products/productsApi";
import { allPlants } from "../../features/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";

const AllProduct = () => {
  const dispatch = useDispatch();
  const { data, isSuccess, isLoading, isError } = useGetProductsQuery();
  const { products } = useSelector((state) => state.products);

  // set to redux local store
  useEffect(() => {
    if (isSuccess) {
      dispatch(allPlants(data));
    }
  }, [data, dispatch, isSuccess]);

  return (
    <>
      <section className="">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 gap-12 lg:gap-3 px-8 lg:px-12 py-6">
          {products?.map((plant) => (
            <ProductCard key={plant._id} plants={plant} />
          ))}
        </div>
      </section>
    </>
  );
};

export default AllProduct;
