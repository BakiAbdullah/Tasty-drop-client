import { FiLogOut } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Profile = () => {
  return (
    <div className="p-3">
      <div className="flex items-center gap-2">
        <BiUser size={20} className="inline-block mr-2" />
        <span>
          <h1 className="font-medium">Naimur Reza</h1>
          <p className="text-sm text-slate-600">Admin</p>
        </span>
      </div>
      <Link className="flex items-center gap-4 pt-5">
        <FiLogOut size={20} /> Log out
      </Link>
    </div>
  );
};
