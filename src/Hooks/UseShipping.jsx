import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import useAxiosSecure from "./useAxiosSecure";

const UseShipping = () => {
  //    tan stack query
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();
  const { data: shipping = [], refetch } = useQuery({
    queryKey: ["shipping", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/paymentsByEmail?email=${user.email}`);
      return res.data;
    },
  });
  return [shipping, refetch];
};

export default UseShipping;
