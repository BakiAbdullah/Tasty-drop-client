import { RxDashboard } from "react-icons/rx";
import { MdOutlineManageSearch } from "react-icons/md";
import { BsCardChecklist } from "react-icons/bs";
import { BiSolidFoodMenu } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";
import { IoRestaurant } from "react-icons/io5";
import { MdTableRestaurant, MdEditDocument } from "react-icons/md";

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
export const customerOptions = [
  {
    name: "Dashboard",
    path: "/dashboard/customer",
    icon: RxDashboard,
  },
  {
    name: "Order History",
    path: "order-history",
    icon: MdOutlineManageSearch,
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
    name: "Add New Menu",
    path: "/dashboard/add-menu",
    icon: BiSolidFoodMenu,
  },
  {
    name: "Manage Menu",
    path: "/dashboard/manage-menu",
    icon: IoRestaurant,
  },
  {
    name: "Manage Order",
    path: "/dashboard/manage-bookings",
    icon: MdTableRestaurant,
  },
  {
    name: "Update Restaurant",
    path: "/dashboard/Update-Restaurant-info",
    icon: MdEditDocument,
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
