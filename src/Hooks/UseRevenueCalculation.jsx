import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const UseRevenueCalculation = () => {
  //    tan stack query
  const axiosSecure = useAxiosSecure();
  const { data: revenueCalculation = [], refetch } = useQuery({
    queryKey: ["revenueCalculation"],
    queryFn: async () => {
      const res = await axiosSecure.get("/revenueCalculation");
      return res.data;
    },
  });
  return [revenueCalculation, refetch];
};

export default UseRevenueCalculation;
