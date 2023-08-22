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
    path: "/dashboard/partners",
    icon: RxDashboard,
  },
  {
    name: "Add New Items",
    path: "/dashboard/add-items",
    icon: BsCardChecklist,
  },
  {
    name: "Manage Items",
    path: "/dashboard/manage-items",
    icon: MdOutlineManageSearch,
  },
  {
    name: "Manage Bookings",
    path: "/dashboard/manage-bookings",
    icon: MdOutlineManageSearch,
  },
];

export const businessOptions = [
  {
    name: "Dashboard",
    path: "/dashboard/business",
    icon: RxDashboard,
  },
  {
    name: "Manage orders",
    path: "manage-menu",
    icon: MdOutlineManageSearch,
  },
];
