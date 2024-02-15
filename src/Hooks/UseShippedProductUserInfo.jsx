import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import useAxiosSecure from "./useAxiosSecure";

const UseShippedProductUserInfo = () => {
  //    tan stack query
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();
  const { data: shippingConfirm = [], refetch } = useQuery({
    queryKey: ["shippingConfirm", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(
        `/shippingConfirmByEmail?email=${user.email}`
      );
      return res.data;
    },
  });
  return [shippingConfirm, refetch];
};

export default UseShippedProductUserInfo;
