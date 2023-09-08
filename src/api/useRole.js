import axios from "axios";

export const useRole = async (email) => {
  if (email) {
    const res = await fetch(`${import.meta.env.VITE_LIVE_URL}user/${email}`);
    const user = await res.json();
    return user?.role;
  }
};
