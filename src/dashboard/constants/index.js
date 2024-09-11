import { GoGoal } from "react-icons/go";

import { FaChartBar, FaUsersCog } from "react-icons/fa";
import { RiAddCircleFill } from "react-icons/ri";
import { MdOutlineViewComfyAlt } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { RiLogoutBoxFill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { LuListTodo } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { FcCalculator } from "react-icons/fc";

export const links = [
  {
    link: "/dashboard/admin",
    icon: FaChartBar,
    text: "Dashboard",
  },
  {
    link: "/dashboard/admin/add-property",
    icon: RiAddCircleFill,
    text: "Add Property",
    badge: {
      text: "Pro",
      color: "bg-gray-100 text-gray-800",
      darkColor: "dark:bg-gray-700 dark:text-gray-300",
    },
  },
  {
    link: "/dashboard/admin/view-property",
    icon: MdOutlineViewComfyAlt,
    text: "View Property",
    badge: {
      text: "4",
      color: "bg-blue-100 text-blue-800",
      darkColor: "dark:bg-blue-900 dark:text-blue-300",
    },
  },
  {
    link: "/dashboard/admin/agents",
    icon: FaUsersCog,
    text: "Agents",
  },
  {
    link: "/dashboard/admin/edit-profile",
    icon: FaUserEdit,
    text: "Edit Profile",
  },
  {
    link: "/dashboard/admin/add-agent",
    icon: FaUserPlus,
    text: "Add Agent",
  },
  {
    href: "#",
    icon: RiLogoutBoxFill,
    text: "Log out",
  },
];

export const shortcutLink = [
  {
    title: "Goals",
    icon: GoGoal,
    link: "/dashboard/admin/goal",
  },
  {
    title: "Todo",
    icon: LuListTodo,
    link: "/dashboard/admin/todo",
  },
  {
    title: "Calender",
    icon: SlCalender,
    link: "/dashboard/admin/calender",
  },
  {
    title: "Calculator",
    icon: FcCalculator,
    link: "/dashboard/admin/calculator",
  },
  {
    title: "Profile",
    icon: FaRegUser,
    link: "/dashboard/admin/profile",
  },
];


export const events = [
  {
    date: "01 Aug",
    title: "Upcoming Event",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    date: "15 Sept",
    title: "Annual Conference",
    description: "Join us for our annual conference.",
  },
  {
    date: "20 Sept",
    title: "Networking Meetup",
    description: "Connect with professionals in your field.",
  },
];

