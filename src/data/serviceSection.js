import { FaCarBattery, FaTemperatureHigh } from "react-icons/fa";
import {
  GiAutoRepair,
  GiCarDoor,
  GiCartwheel,
  GiSpray,
  GiTinker,
} from "react-icons/gi";
import {
  MdCleaningServices,
  MdDryCleaning,
  MdHealthAndSafety,
  MdLocalCarWash,
} from "react-icons/md";
import { RiOilFill } from "react-icons/ri";

const services = [
  {
    id: 1,
    icon: <GiAutoRepair />,
    name: "Car Service",
  },
  {
    id: 2,
    icon: <GiCartwheel />,
    name: "Tyres & Wheel Care",
  },
  {
    id: 3,
    icon: <GiSpray />,
    name: "Denting & Painting",
  },
  {
    id: 4,
    icon: <FaTemperatureHigh />,
    name: "AC Service & Repair",
  },
  {
    id: 5,
    icon: <MdCleaningServices />,
    name: "Car Spa & Cleaning",
  },
  {
    id: 6,
    icon: <FaCarBattery />,
    name: "Batteries",
  },
  {
    id: 7,
    icon: <MdHealthAndSafety />,
    name: "Insurance Claims",
  },
  {
    id: 8,
    icon: <GiCarDoor />,
    name: "Windshield & Lights",
  },
  {
    id: 9,
    icon: <GiTinker />,
    name: "Clutch & Brakes",
  },
  {
    id: 10,
    icon: <MdDryCleaning />,
    name: "Dryclean",
  },
  {
    id: 11,
    icon: <MdLocalCarWash />,
    name: "Car Wash",
  },
  {
    id: 12,
    icon: <RiOilFill />,
    name: "Oiling",
  },
];

export default services;
