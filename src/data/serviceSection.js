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
    routeName: "carService",
  },
  {
    id: 2,
    icon: <GiCartwheel />,
    name: "Tyres & Wheel Care",
    routeName: "wheelService",
  },
  {
    id: 3,
    icon: <GiSpray />,
    name: "Denting & Painting",
    routeName: "paintingService",
  },
  {
    id: 4,
    icon: <FaTemperatureHigh />,
    name: "AC Service & Repair",
    routeName: "acService",
  },

  {
    id: 5,
    icon: <MdCleaningServices />,
    name: "Car Spa & Cleaning",
    routeName: "cleaningService",
  },
  {
    id: 6,
    icon: <FaCarBattery />,
    name: "Batteries",
    routeName: "batteryService",
  },
  {
    id: 7,
    icon: <MdHealthAndSafety />,
    name: "Insurance Renewal",
    routeName: "InsuranceRenewal",
  },
  {
    id: 8,
    icon: <GiCarDoor />,
    name: "Windshield & Lights",
    routeName: "lightService",
  },
  {
    id: 9,
    icon: <GiTinker />,
    name: "Clutch & Brakes",
    routeName: "clutchService",
  },
  {
    id: 10,
    icon: <MdDryCleaning />,
    name: "Dryclean",
    routeName: "cleaningService",
  },
  {
    id: 11,
    icon: <MdLocalCarWash />,
    name: "Car Wash",
    routeName: "washService",
  },
  {
    id: 12,
    icon: <RiOilFill />,
    name: "Oiling",
    routeName: "oilingService",
  },
];

export default services;
