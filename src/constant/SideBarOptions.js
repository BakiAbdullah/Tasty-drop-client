import { RxDashboard } from "react-icons/rx";
import { MdOutlineManageSearch } from "react-icons/md";
import { BsCardChecklist } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";

export const adminOptions = [
  {
    name: "Dashboard",
    path: "/dashboard/admin",
    icon: RxDashboard,
  },
  {
    name: "Manage Restaurant",
    path: "manage-restaurant",
    icon: MdOutlineManageSearch,
  },
  {
    name: "Restaurant List",
    path: "restaurants-list",
    icon: BsCardChecklist,
  },
  {
    name: "Users",
    path: "manage-users",
    icon: HiUsers,
  },
];

export const riderOptions = [
  {
    name: "Dashboard",
    path: "/dashboard/rider",
    icon: RxDashboard,
  },
  {
    name: "Manage Orders",
    path: "manage-orders",
    icon: MdOutlineManageSearch,
  },
  {
    name: "Orders List",
    path: "orders-list",
    icon: BsCardChecklist,
  },
];

export const partnerOptions = [
  {
    name: "Dashboard",
    path: "/dashboard/partner",
    icon: RxDashboard,
  },
  {
    name: "Manage Menu",
    path: "manage-menu",
    icon: MdOutlineManageSearch,
  },
  {
    name: "Menu List",
    path: "menu-list",
    icon: BsCardChecklist,
  },
];
