const deliveredInfo = [
  {
    id: "1",
    ownerName: "Kamal (Anna Nagar)",
    carName: "Swift",
    carNo: "TN-02-TY-5628",
    date: "2022-12-06",
    time: "10:30",
    status: "Delivered",
    paymentStatus: "Payed!",
    paymentMode: "Cash",
    bookingFees: "50Rs",
    waterWash: "150Rs",
    totalService: "500Rs",
    totalAmout: "700Rs",
  },
  {
    id: "2",
    ownerName: "Yusuf (Perambur)",
    carName: "Honda city",
    carNo: "TN-05-JI-2548",
    date: "2022-12-07",
    time: "11:00",
    status: "Delivered",
    paymentStatus: "Payed!",
    paymentMode: "Card",
    bookingFees: "50Rs",
    waterWash: "150Rs",
    totalService: "500Rs",
    totalAmout: "700Rs",
  },
  {
    id: "3",
    ownerName: "Yogesh kumar (Virugambakkam)",
    carName: "Innova",
    carNo: "TN-10-LI-4589",
    date: "2022-12-08",
    time: "14:30",
    status: "Delivered",
    paymentStatus: "Payed!",
    paymentMode: "Card",
    bookingFees: "50Rs",
    waterWash: "150Rs",
    totalService: "500Rs",
    totalAmout: "700Rs",
  },
  {
    id: "4",
    ownerName: "Kannan (AVADI)",
    carName: "Indica",
    carNo: "TN-12-ON-9765",
    date: "2022-12-08",
    time: "11:30",
    status: "Not delivered",
    paymentStatus: "Not Payed!",
    paymentMode: "",
    bookingFees: "50Rs",
    waterWash: "150Rs",
    totalService: "500Rs",
    totalAmout: "700Rs",
  },
  {
    id: "5",
    ownerName: "Gokul kumar (Kolathur)",
    carName: "BMW",
    carNo: "TN-05-RF-5307",
    date: "2022-12-05",
    time: "16:00",
    status: "Not delivered",
    paymentStatus: "Not Payed!",
    paymentMode: "",
    bookingFees: "50Rs",
    waterWash: "150Rs",
    totalService: "500Rs",
    totalAmout: "700Rs",
  },
  {
    id: "6",
    ownerName: "Mahesh (Adayar)",
    carName: "BENZ",
    carNo: "TN-07-AA-3638",
    date: "2022-12-05",
    time: "17:00",
    status: "Not delivered",
    paymentStatus: "Not Payed!",
    paymentMode: "",
    bookingFees: "50Rs",
    waterWash: "150Rs",
    totalService: "500Rs",
    totalAmout: "700Rs",
  },
  {
    id: "7",
    ownerName: "Kumar (T.Nagar)",
    carName: "Tiago",
    carNo: "TN-07-TY-3595",
    date: "2022-12-10",
    time: "17:00",
    status: "Not delivered",
    paymentStatus: "Not Payed!",
    paymentMode: "",
    bookingFees: "50Rs",
    waterWash: "150Rs",
    totalService: "500Rs",
    totalAmout: "700Rs",
  },
  {
    id: "8",
    ownerName: "Harish (Velacherry)",
    carName: "Nexon",
    carNo: "TN-07-UO-1986",
    date: "2022-12-09",
    time: "17:00",
    status: "Not delivered",
    paymentStatus: "Not Payed!",
    paymentMode: "",
    bookingFees: "50Rs",
    waterWash: "150Rs",
    totalService: "500Rs",
    totalAmout: "700Rs",
  },
  {
    id: "9",
    ownerName: "Priya (Porur)",
    carName: "AUDI",
    carNo: "TN-07-AA-3638",
    date: "2022-12-15",
    time: "17:00",
    status: "Not delivered",
    paymentStatus: "Not Payed!",
    paymentMode: "",
    bookingFees: "50Rs",
    waterWash: "150Rs",
    totalService: "500Rs",
    totalAmout: "700Rs",
  },
  {
    id: "10",
    ownerName: "Ravi (Purasaiwalkam)",
    carName: "Magnite",
    carNo: "TN-07-JK-2383",
    date: "2022-12-11",
    time: "17:00",
    status: "Not delivered",
    paymentStatus: "Not Payed!",
    paymentMode: "",
    bookingFees: "50Rs",
    waterWash: "150Rs",
    totalService: "500Rs",
    totalAmout: "700Rs",
  },
  {
    id: "11",
    ownerName: "Jagan (Egmore)",
    carName: "Fortuner",
    carNo: "TN-07-MS-0597",
    date: "2022-11-14",
    time: "17:00",
    status: "Not delivered",
    paymentStatus: "Not Payed!",
    paymentMode: "",
    bookingFees: "50Rs",
    waterWash: "150Rs",
    totalService: "500Rs",
    totalAmout: "700Rs",
  },
  {
    id: "12",
    ownerName: "Tarani (Villivakkam)",
    carName: "Kwid",
    carNo: "TN-07-GF-6912",
    date: "2022-11-19",
    time: "17:00",
    status: "Not delivered",
    paymentStatus: "Not Payed!",
    paymentMode: "",
    bookingFees: "50Rs",
    waterWash: "150Rs",
    totalService: "500Rs",
    totalAmout: "700Rs",
  },
  {
    id: "13",
    ownerName: "Kishore (Ambattur)",
    carName: "Baleno",
    carNo: "TN-10-BQ-6731",
    date: "2022-12-14",
    time: "14:30",
    status: "Delivered",
    paymentStatus: "Payed!",
    paymentMode: "Cash",
    bookingFees: "50Rs",
    waterWash: "150Rs",
    totalService: "500Rs",
    totalAmout: "700Rs",
  },
  {
    id: "14",
    ownerName: "Kumaravel (Manali)",
    carName: "Scorpio",
    carNo: "TN-10-PU-7619",
    date: "2022-12-20",
    time: "14:30",
    status: "Delivered",
    paymentStatus: "Payed!",
    paymentMode: "Cash",
    bookingFees: "50Rs",
    waterWash: "150Rs",
    totalService: "500Rs",
    totalAmout: "700Rs",
  },
  {
    id: "15",
    ownerName: "Tharun kumar (Sholinganallur)",
    carName: "Volvo",
    carNo: "TN-10-DN-8050",
    date: "2022-12-29",
    time: "14:30",
    status: "Delivered",
    paymentStatus: "Payed!",
    paymentMode: "Online",
    bookingFees: "50Rs",
    waterWash: "150Rs",
    totalService: "500Rs",
    totalAmout: "700Rs",
  },
  {
    id: "16",
    ownerName: "Mohammad ali khan (Korattur)",
    carName: "Endeavor",
    carNo: "TN-10-AP-9467",
    date: "2022-11-01",
    time: "14:30",
    status: "Delivered",
    paymentStatus: "Payed!",
    paymentMode: "Online",
    bookingFees: "50Rs",
    waterWash: "150Rs",
    totalService: "500Rs",
    totalAmout: "700Rs",
  },
];

export default deliveredInfo;
