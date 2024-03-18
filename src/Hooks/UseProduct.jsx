import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const UseProduct = () => {
  const axiosPublic = useAxiosPublic();
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPublic.get("/AllPlants");
      return res.data;
    },
  });
  return [products, refetch];
};

export default UseProduct;
