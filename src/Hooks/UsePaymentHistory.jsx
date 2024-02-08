import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import useAxiosSecure from "./useAxiosSecure";

const UsePaymentHistory = () => {
  //    tan stack query
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();
  const { data: PaymentHistory = [], refetch } = useQuery({
    queryKey: ["paymentHistory", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(
        `/paymentHistoryByEmail?email=${user.email}`
      );
      return res.data;
    },
  });
  return [PaymentHistory, refetch];
};

export default UsePaymentHistory;
