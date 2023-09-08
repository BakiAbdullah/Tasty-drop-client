import useAxiosSecure from "../Hooks/useAxiosSecure";

export const useRole = async (email) => {
  if (email) {
    const res = useAxiosSecure(`${import.meta.env.VITE_LIVE_URL}user/${email}`);
    const user = await res.json();
    return user?.role;
  }
};
