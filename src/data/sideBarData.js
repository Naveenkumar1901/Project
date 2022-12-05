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
    icon: <MdOutlineHome className="sidebarIcon" />,
    name: "Home",
    route: "/",
  },
  {
    id: 2,
    icon: <MdOutlineLocalOffer className="sidebarIcon" />,
    name: "Offers",
    route: "/Offers",
  },
  {
    id: 3,
    icon: <IoPersonOutline className="sidebarIcon" />,
    name: "Profile",
    route: "/Profile",
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
