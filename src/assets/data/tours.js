import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg"; 
import tourImg09 from "../images/tour-img09.jpg"; 
import tourImg10 from "../images/tour-img10.jpg"; 

const tours = [
  {
    id: "01",
    title: "Labuan Bajo",
    city: "Nusa Tenggara Timur",
    distance: 300,
    address : "Kecamatan Komodo, Kabupaten Manggarai Barat.",
    price: 750,
    maxGroupSize: 10,
    desc: "Destinasi yang akan dikunjungi adalah jelajah Pulau Padar, Pulau Komodo, Pulau Kelor, Pink Beach dan Manta Point (include snorkeling bersama).",
    fasilitas : "Fasilitas trip berupa transportasi free wifi pulang dan pergi, makan pagi dan malam, air mineral sepanjang perjalanan, penginapan, spanduk properti foto, tour leader dan dokumentasi dari VoyaGo.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Bromo",
    city: "Jawa Timur",
    distance: 400,
    address : "Cemoro Lawang, Desa Ngadisari.",
    price: 550,
    maxGroupSize: 8,
    desc: "Destinasi yang akan dikunjungi adalah Kawasan Taman Nasional Gunung Bromo, Sunrise point, Pasir Berbisik, Batu Night Spectacular dan Pusat Oleh-Oleh Malang.",
    fasilitas : "Fasilitas trip berupa transportasi free wifi pulang dan pergi, makan pagi dan malam, air mineral sepanjang perjalanan, penginapan, spanduk properti foto, tour leader dan dokumentasi dari VoyaGo.",
    reviews: [
       {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Nusa Penida",
    city: "Bali",
    address : "Kabupaten Klungkung.",
    distance: 500,
    price: 600,
    maxGroupSize: 8,
    desc: "Destinasi yang akan dikunjungi adalah Desa Penglipuran, Pantai Jimbaran, Pantai Pandawa, Pulau Nusa Penida (Broken Beach, Kelingking Beach).",
    fasilitas : "Fasilitas trip berupa transportasi free wifi pulang dan pergi, makan pagi dan malam, air mineral sepanjang perjalanan, penginapan, spanduk properti foto, tour leader dan dokumentasi dari VoyaGo.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Dieng",
    city: "Jawa Tengah",
    distance: 350,
    address : "Dieng, Kejajar, Kabupaten Wonosobo.",
    price: 350,
    maxGroupSize: 8,
    desc: "Destinasi yang akan dikunjungi adalah Kompleks Candi Arjuna, Kawah Sikidang, Dieng Park dan Bukit Sikapuk.",
    fasilitas : "Fasilitas trip berupa transportasi free wifi pulang dan pergi, makan pagi dan malam, air mineral sepanjang perjalanan, penginapan, spanduk properti foto, tour leader dan dokumentasi dari VoyaGo.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Ciwidey",
    city: "Bandung, Jawa Barat",
    distance: 350,
    address : "Jalan Raya Ciwidey Patengan Km 11 Lebakmuncang.",
    price: 350,
    maxGroupSize: 8,
    desc: "Destinasi yang akan dikunjungi adalah Kawah Putih, Ranca Upas, Kebun Teh Situ Patenggang dan Pusat Oleh-Oleh Bandung.",
    fasilitas : "Fasilitas trip berupa transportasi free wifi pulang dan pergi, makan pagi dan malam, air mineral sepanjang perjalanan, penginapan, spanduk properti foto, tour leader dan dokumentasi dari VoyaGo.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Pulau Tidung",
    city: "Kepulauan Seribu",
    address : "Jalan Lodan Raya No.2, Ancol.",
    distance: 450,
    price: 450,
    maxGroupSize: 8,
    desc: "Destinasi yang akan dikunjungi adalah jelajah Pulau Tidung include berenang di Pantai, snorkeling bersama, jembatan cinta, banana boat extreme.",
    fasilitas : "Fasilitas trip berupa transportasi free wifi pulang dan pergi, makan pagi dan malam, air mineral sepanjang perjalanan, penginapan, spanduk properti foto, tour leader dan dokumentasi dari VoyaGo.",
    reviews: [
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Raja Ampat",
    city: "Papua",
    distance: 900,
    address : "Yenbeser, Waigeo Selatan.",
    price: 900,
    maxGroupSize: 8,
    desc: "Destinasi yang akan dikunjungi adalah Puncak Mayafun, Pasir Timbul, Telaga Bintang, dan Kali Biru.",
    fasilitas : "Fasilitas trip berupa transportasi free wifi pulang dan pergi, makan pagi dan malam, air mineral sepanjang perjalanan, penginapan, spanduk properti foto, tour leader dan dokumentasi dari VoyaGo.",
    reviews: [
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Pulau Pramuka",
    city: "Kepulauan Seribu",
    distance: 500,
    address : "Kelurahan Pulau Panggang, Kepulauan Seribu Utara",
    price: 750,
    maxGroupSize: 8,
    desc: "Destinasi yang akan dikunjungi adalah jelajah Pulau Pramuka (include berenang di Pantai, snorkeling bersama, banana boat extreme), Pulau Ponco, Pulau Timbul, dan Penangkaran Penyu.",
    fasilitas : "Fasilitas trip berupa transportasi free wifi pulang dan pergi, makan pagi dan malam, air mineral sepanjang perjalanan, penginapan, spanduk properti foto, tour leader dan dokumentasi dari VoyaGo.",
    reviews: [
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
  {
    id: "09",
    title: "Pulau Harapan",
    city: "Kepulauan Seribu",
    distance: 300,
    address : "Kepulauan Seribu Utara",
    price: 400,
    maxGroupSize: 8,
    desc: "Destinasi yang akan dikunjungi adalah jelajah Pulau Harapan(include berenang di Pantai dan snorkeling bersama), Pulau Dolphin, Pulau Bulat, Pulau Perak dan Penangkaran Penyu",
    fasilitas : "Fasilitas trip berupa transportasi free wifi pulang dan pergi, makan pagi dan malam, air mineral sepanjang perjalanan, penginapan, spanduk properti foto, tour leader dan dokumentasi dari VoyaGo.",
    reviews: [
    ],
    avgRating: 4.5,
    photo: tourImg09,
    featured: false,
  },
  {
    id: "10",
    title: "Geopark Ciletuh",
    city: "Sukabumi, Jawa Barat",
    distance: 300,
    address : "Pelabuhan Ratu, Sukabumi",
    price: 300,
    maxGroupSize: 8,
    desc: "Destinasi yang akan dikunjungi adalah jelajah Geopark Ciletuh, Curug Cikanteh, Curug Sodong, Puncak Darma dan Puncak Dini.",
    fasilitas : "Fasilitas trip berupa transportasi free wifi pulang dan pergi, makan pagi dan malam, air mineral sepanjang perjalanan, penginapan, spanduk properti foto, tour leader dan dokumentasi dari VoyaGo.",
    reviews: [
    ],
    avgRating: 4.5,
    photo: tourImg10,
    featured: false,
  },
  
];

export default tours;
