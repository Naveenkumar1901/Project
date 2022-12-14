const customerData = [
  {
    id: "1",
    serviceType: "Car Service",
    customerName: "Kamal (Anna Nagar)",
    mobileNumber: "9468726578",
    address: "10, 3rd main road, Anna Nagar, Chennai",
    carNo: "TN-02-TY-5628",
    carName: "Swift",
    entryDate: "2022-12-06",
    deliveryDate: "2022-12-16",
    deliveryTime: "10:30",
    scheduleStatus: "Confirmed",
    paymentStatus: "Payed!",
    paymentMode: "UPI",
    bookingFees: "50",
    waterWash: "150",
    spareCharges: "2000",
    labourCharges: "500",
    serviceCharges: "2000",
    totalAmount: "₹5546",
    deliveryStatus: "Not delivered",
  },
  {
    id: "2",
    serviceType: "Tyres & Wheel Care",
    customerName: "Yusuf (Perambur)",
    mobileNumber: "6317798725",
    address: "16A, 1st street, Perambur, Chennai",
    carNo: "TN-05-JI-2548",
    carName: "Honda city",
    entryDate: "2022-12-10",
    deliveryDate: "2022-12-16",
    deliveryTime: "12:30",
    scheduleStatus: "Confirmed",
    paymentStatus: "Payed!",
    paymentMode: "Net banking",
    bookingFees: "50",
    waterWash: "150",
    spareCharges: "2000",
    labourCharges: "500",
    serviceCharges: "2000",
    totalAmount: "₹5546",
    deliveryStatus: "Not delivered",
  },
  {
    id: "3",
    serviceType: "Denting & Painting",
    customerName: "Yogesh kumar (Virugambakkam)",
    mobileNumber: "8456127989",
    address: "100/22, 5th street, Virugambakkam, Chennai",
    carNo: "TN-10-LI-4589",
    carName: "Innova",
    entryDate: "2022-12-02",
    deliveryDate: "2022-12-13",
    deliveryTime: "13:30",
    scheduleStatus: "Confirmed",
    paymentStatus: "Payed!",
    paymentMode: "Debit card",
    bookingFees: "50",
    waterWash: "150",
    spareCharges: "2000",
    labourCharges: "500",
    serviceCharges: "2000",
    totalAmount: "₹5546",
    deliveryStatus: "Delivered",
  },
  {
    id: "4",
    serviceType: "Oiling",
    customerName: "Kannan (AVADI)",
    mobileNumber: "9781469740",
    address: "100/22, 5th street, Virugambakkam, Chennai",
    carNo: "TN-12-ON-9765",
    carName: "Indica",
    entryDate: "2022-12-01",
    deliveryDate: "2022-12-11",
    deliveryTime: "15:00",
    scheduleStatus: "Confirmed",
    paymentStatus: "Payed!",
    paymentMode: "UPI",
    bookingFees: "50",
    waterWash: "150",
    spareCharges: "2000",
    labourCharges: "500",
    serviceCharges: "2000",
    totalAmount: "₹5546",
    deliveryStatus: "Delivered",
  },
  {
    id: "5",
    serviceType: "AC Service & Repair",
    customerName: "Gokul kumar (Kolathur)",
    mobileNumber: "9534798030",
    address: "44/31, 10th main road, Kolathur, Chennai",
    carNo: "TN-05-RF-5307",
    carName: "BMW",
    entryDate: "2022-11-22",
    deliveryDate: "2022-12-01",
    deliveryTime: "9:30",
    scheduleStatus: "Confirmed",
    paymentStatus: "Payed!",
    paymentMode: "Credit card",
    bookingFees: "50",
    waterWash: "150",
    spareCharges: "2000",
    labourCharges: "500",
    serviceCharges: "2000",
    totalAmount: "₹5546",
    deliveryStatus: "Delivered",
  },
  {
    id: "6",
    serviceType: "Car Spa & Cleaning",
    customerName: "Mahesh (Adayar)",
    mobileNumber: "9113579051",
    address: "56, 10th street, Adyar, Chennai",
    carNo: "TN-07-AA-3638",
    carName: "BENZ",
    entryDate: "2022-11-29",
    deliveryDate: "2022-12-08",
    deliveryTime: "11:00",
    scheduleStatus: "Confirmed",
    paymentStatus: "Payed!",
    paymentMode: "UPI",
    bookingFees: "50",
    waterWash: "150",
    spareCharges: "2000",
    labourCharges: "500",
    serviceCharges: "2000",
    totalAmount: "₹5546",
    deliveryStatus: "Not delivered",
  },
  {
    id: "7",
    serviceType: "Batteries",
    customerName: "Kumar (T.Nagar)",
    mobileNumber: "8236779451",
    address: "05, 66th street, T.Nagar, Chennai",
    carNo: "TN-07-TY-3595",
    carName: "Tiago",
    entryDate: "2022-12-05",
    deliveryDate: "2022-12-15",
    deliveryTime: "18:00",
    scheduleStatus: "Confirmed",
    paymentStatus: "Not Payed!",
    paymentMode: "",
    bookingFees: "50",
    waterWash: "150",
    spareCharges: "2000",
    labourCharges: "500",
    serviceCharges: "2000",
    totalAmount: "₹5546",
    deliveryStatus: "Not delivered",
  },
  {
    id: "8",
    serviceType: "Insurance Claims",
    customerName: "Harish (Velacherry)",
    mobileNumber: "9397023647",
    address: "89, 15th street, Velacherry, Chennai",
    carNo: "TN-07-UO-1986",
    carName: "Nexon",
    entryDate: "2022-12-10",
    deliveryDate: "2022-12-20",
    deliveryTime: "16:00",
    scheduleStatus: "Not confirmed",
    paymentStatus: "Not Payed!",
    paymentMode: "",
    bookingFees: "50",
    waterWash: "150",
    spareCharges: "2000",
    labourCharges: "500",
    serviceCharges: "2000",
    totalAmount: "₹5546",
    deliveryStatus: "Not delivered",
  },
  {
    id: "9",
    serviceType: "Windshield & Lights",
    customerName: "Babu (Porur)",
    mobileNumber: "7569812357",
    address: "12, 57th street, Porur, Chennai",
    carNo: "TN-07-AA-3638",
    carName: "AUDI",
    entryDate: "2022-12-12",
    deliveryDate: "2022-12-22",
    deliveryTime: "16:00",
    scheduleStatus: "Not confirmed",
    paymentStatus: "Not Payed!",
    paymentMode: "",
    bookingFees: "50",
    waterWash: "150",
    spareCharges: "2000",
    labourCharges: "500",
    serviceCharges: "2000",
    totalAmount: "₹5546",
    deliveryStatus: "Not delivered",
  },
  {
    id: "10",
    serviceType: "Clutch & Brakes",
    customerName: "Ravi (Purasaiwalkam)",
    mobileNumber: "7413655490",
    address: "12, 57th street, Porur, Chennai",
    carNo: "TN-07-JK-2383",
    carName: "Nissan-Magnite",
    entryDate: "2022-12-12",
    deliveryDate: "2022-12-22",
    deliveryTime: "16:00",
    scheduleStatus: "Not confirmed",
    paymentStatus: "Not Payed!",
    paymentMode: "",
    bookingFees: "50",
    waterWash: "150",
    spareCharges: "2000",
    labourCharges: "500",
    serviceCharges: "2000",
    totalAmount: "₹5546",
    deliveryStatus: "Not delivered",
  },
  {
    id: "11",
    serviceType: "Dryclean",
    customerName: "Jagan (Egmore)",
    mobileNumber: "9900578613",
    address: "24, 20th street, Egmore, Chennai",
    carNo: "TN-07-MS-0597",
    carName: "Fortuner",
    entryDate: "2022-12-13",
    deliveryDate: "2022-12-25",
    deliveryTime: "16:00",
    scheduleStatus: "Not confirmed",
    paymentStatus: "Not Payed!",
    paymentMode: "",
    bookingFees: "50",
    waterWash: "150",
    spareCharges: "2000",
    labourCharges: "500",
    serviceCharges: "2000",
    totalAmount: "₹5546",
    deliveryStatus: "Not delivered",
  },
  {
    id: "12",
    serviceType: "Car Wash",
    customerName: "Tarani (Villivakkam)",
    mobileNumber: "9713288469",
    address: "2/8, 77th street, Villivakkam, Chennai",
    carNo: "TN-07-GF-6912",
    carName: "Renault-Kwid",
    entryDate: "2022-12-10",
    deliveryDate: "2022-12-19",
    deliveryTime: "10:00",
    scheduleStatus: "Confirmed",
    paymentStatus: "Not Payed!",
    paymentMode: "",
    bookingFees: "50",
    waterWash: "150",
    spareCharges: "2000",
    labourCharges: "500",
    serviceCharges: "2000",
    totalAmount: "₹5546",
    deliveryStatus: "Not delivered",
  },
  {
    id: "13",
    serviceType: "Clutch & Brakes",
    customerName: "Kishore (Ambattur)",
    mobileNumber: "8234791464",
    address: "20/11, 5th street, Ambattur, Chennai",
    carNo: "TN-10-BQ-6731",
    carName: "Baleno",
    entryDate: "2022-12-07",
    deliveryDate: "2022-12-18",
    deliveryTime: "12:00",
    scheduleStatus: "Confirmed",
    paymentStatus: "Payed!",
    paymentMode: "Net banking",
    bookingFees: "50",
    waterWash: "150",
    spareCharges: "2000",
    labourCharges: "500",
    serviceCharges: "2000",
    totalAmount: "₹5546",
    deliveryStatus: "Not delivered",
  },
  {
    id: "14",
    serviceType: "Car Wash",
    customerName: "Kumaravel (Manali)",
    mobileNumber: "6457131578",
    address: "67/5, 80th street, Manali, Chennai",
    carNo: "TN-10-PU-7619",
    carName: "Scorpio",
    entryDate: "2022-12-05",
    deliveryDate: "2022-12-15",
    deliveryTime: "14:00",
    scheduleStatus: "Confirmed",
    paymentStatus: "Payed!",
    paymentMode: "Net banking",
    bookingFees: "50",
    waterWash: "150",
    spareCharges: "2000",
    labourCharges: "500",
    serviceCharges: "2000",
    totalAmount: "₹5546",
    deliveryStatus: "Not delivered",
  },
  {
    id: "15",
    serviceType: "Car Service",
    customerName: "Tharun kumar (Sholinganallur)",
    mobileNumber: "8423547894",
    address: "22/5, 27th street, Sholinganallur, Chennai",
    carNo: "TN-10-DN-8050",
    carName: "Volvo",
    entryDate: "2022-12-06",
    deliveryDate: "2022-12-18",
    deliveryTime: "15:00",
    scheduleStatus: "Confirmed",
    paymentStatus: "Payed!",
    paymentMode: "UPI",
    bookingFees: "50",
    waterWash: "150",
    spareCharges: "2000",
    labourCharges: "500",
    serviceCharges: "2000",
    totalAmount: "₹5546",
    deliveryStatus: "Not delivered",
  },
  {
    id: "16",
    serviceType: "Denting & Painting",
    customerName: "Mohammad ali khan (Korattur)",
    mobileNumber: "9121347856",
    address: "39/12, 33rd street, Korattur, Chennai",
    carNo: "TN-10-AP-9467",
    carName: "Endeavor",
    entryDate: "2022-12-06",
    deliveryDate: "2022-12-18",
    deliveryTime: "15:00",
    scheduleStatus: "Confirmed",
    paymentStatus: "Payed!",
    paymentMode: "UPI",
    bookingFees: "50",
    waterWash: "150",
    spareCharges: "2000",
    labourCharges: "500",
    serviceCharges: "2000",
    totalAmount: "₹5546",
    deliveryStatus: "Not delivered",
  },
];

export default customerData;
