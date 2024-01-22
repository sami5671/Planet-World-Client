import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const UseProduct = () => {
  const axiosSecure = useAxiosSecure();
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosSecure.get("/AllPlants");
      return res.data;
    },
  });
  return [products, refetch];
};

export default UseProduct;
