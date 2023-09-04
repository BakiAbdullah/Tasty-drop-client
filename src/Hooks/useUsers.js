import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
  const { axiosSecure } = useAxiosSecure();
  const { data: usersData = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const data = await axiosSecure.get(`/users`);
      return data.data;
    },
  });
  return { usersData };
};

export default useUsers;
