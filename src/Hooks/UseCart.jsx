import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import useAxiosSecure from "./useAxiosSecure";

const UseCart = () => {
  //    tan stack query
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default UseCart;
