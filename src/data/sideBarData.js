import { AiOutlineSchedule } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import {
  MdOutlineCarRepair,
  MdOutlineElectricCar,
  MdOutlineHome,
  MdOutlineLocalOffer,
} from "react-icons/md";

const sideBarData = [
  {
    id: 1,
    icon: <MdOutlineHome className="sidebarIcon" size={20} />,
    name: "Home",
    route: "/home",
  },

  {
    id: 2,
    icon: <IoPersonOutline className="sidebarIcon" />,
    name: "Profile",
    route: "/profile",
  },
  {
    id: 3,
    icon: <MdOutlineLocalOffer className="sidebarIcon" />,
    name: "Offers",
    route: "/offers",
  },
  {
    id: 4,
    icon: <AiOutlineSchedule className="sidebarIcon" />,
    name: "Schedule",
    route: "/schedule",
  },
  {
    id: 5,
    icon: <MdOutlineCarRepair className="sidebarIcon" />,
    name: "Upcoming",
    route: "/upcoming",
  },
  {
    id: 6,
    icon: <MdOutlineElectricCar className="sidebarIcon" />,
    name: "Outgoing",
    route: "/delivered",
  },
];

export default sideBarData;
