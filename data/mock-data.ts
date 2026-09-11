import { Kos, CityLocation, CampusLocation, PromoBanner } from "@/types";

// ============================================
// PROMO BANNER (Hero carousel section)
// ============================================
export const promoBanners: PromoBanner[] = [
  {
    id: "promo-1",
    image:
      "https://static.mamikos.com/uploads/cache/data/event/2025-02-27/7GbGtCyA-540x720.jpg",
    alt: "Promo Ngebut",
    link: "https://mkos.app/ngebutv3",
  },
  {
    id: "promo-2",
    image:
      "https://static.mamikos.com/uploads/cache/data/event/2025-09-17/WEuGSsL5-540x720.jpg",
    alt: "Fitur Survei Kos",
    link: "https://mkos.app/fitursurveytenant",
  },
  {
    id: "promo-3",
    image:
      "https://static.mamikos.com/uploads/cache/data/event/2026-05-11/Eu70Obie-540x720.webp",
    alt: "Promo Long Term Mei 2026",
    link: "https://promo.mamikos.com/?utm_medium=bannereventtenant&utm_source=homebannertenant&utm_campaign=promolengtermmei26",
  },
  {
    id: "promo-4",
    image:
      "https://static.mamikos.com/uploads/cache/data/event/2026-03-06/zQ1fjw0u-540x720.webp",
    alt: "Perlindungan Ekstra untuk Motor & Barang Pribadi",
    link: "https://mamikos.com/info/perlindungan-ekstra-untuk-motor-barang-pribadi/?utm_medium=bannereventtenant&utm_source=homebannertenant&utm_campaign=perlindunganextra",
  },
  {
    id: "promo-5",
    image:
      "https://static.mamikos.com/uploads/cache/data/event/2026-08-27/cuwPhRac-540x720.webp",
    alt: "Promo Bali Diskon Rp50.000",
    link: "https://promo.mamikos.com/promo-bali-diskon-rp50-000/",
  },
];

// ============================================
// PROMO NGEBUT (dengan diskon nominal + countdown)
// ============================================
export const promoNgebutKos: Kos[] = [
  {
    id: "kos-1",
    name: "Kost Habibie Ploso Tipe A",
    location: "Tambaksari",
    category: "Campur",
    rating: 4.0,
    remainingRooms: "Sisa 3 kamar",
    facilities: ["K. Mandi Dalam", "WiFi", "AC", "Kloset Duduk", "Kasur"],
    image: "https://picsum.photos/seed/mamikos-kos-1/400/300",
    detailUrl:
      "https://mamikos.com/room/kost-kota-surabaya-kost-campur-eksklusif-kost-singgahsini-habibie-ploso-tipe-a-tambaksari-surabaya-2?redirection_source=home%20promo%20ngebut",
    originalPrice: 1550000,
    discountAmount: 78000,
    finalPrice: 1472500,
    priceLabel: "(Bulan pertama)",
  },
  {
    id: "kos-2",
    name: "Kost Griya Aspen Dago Pakar Tipe B",
    location: "Cimenyan",
    category: "Putra",
    remainingRooms: "Sisa 3 kamar",
    facilities: ["WiFi", "Kloset Duduk", "Kasur"],
    image: "https://picsum.photos/seed/mamikos-kos-2/400/300",
    detailUrl:
      "https://mamikos.com/room/kost-kabupaten-bandung-kost-putra-eksklusif-kost-singgahsini-griya-aspen-dago-pakar-tipe-b-cimenyan-bandung?redirection_source=home%20promo%20ngebut",
    originalPrice: 1925000,
    discountAmount: 171000,
    finalPrice: 1754000,
    priceLabel: "(Bulan pertama)",
  },
  {
    id: "kos-3",
    name: "Kost MDM Homie Fatmawati Tipe A",
    location: "Cilandak, Jakarta Selatan",
    category: "Campur",
    facilities: ["K. Mandi Dalam", "WiFi", "Kasur"],
    image: "https://picsum.photos/seed/mamikos-kos-3/400/300",
    detailUrl:
      "https://mamikos.com/room/kost-kota-jakarta-selatan-kost-campur-eksklusif-kost-singgahsini-mdm-homie-fatmawati-tipe-a-cilandak-jakarta-selatan-2?redirection_source=home%20promo%20ngebut",
    originalPrice: 1800000,
    discountAmount: 150000,
    finalPrice: 1650000,
    priceLabel: "(Bulan pertama)",
  },
  {
    id: "kos-4",
    name: "Kost Chika 19 Tipe A",
    location: "Pondok Aren, Tangerang Selatan",
    category: "Putri",
    rating: 4.9,
    remainingRooms: "Sisa 1 kamar",
    facilities: ["K. Mandi Dalam", "WiFi", "AC", "Kasur"],
    image: "https://picsum.photos/seed/mamikos-kos-4/400/300",
    detailUrl:
      "https://mamikos.com/room/kost-kota-tangerang-selatan-kost-putri-eksklusif-kost-singgahsini-chika-19-tipe-a-pondok-aren-tangerang-selatan?redirection_source=home%20promo%20ngebut",
    originalPrice: 1425000,
    discountAmount: 42000,
    finalPrice: 1383000,
    priceLabel: "(Bulan pertama)",
  },
  {
    id: "kos-5",
    name: "Kost Samaimun Tipe C",
    location: "Cempaka Putih, Jakarta Pusat",
    category: "Putri",
    facilities: ["K. Mandi Dalam", "WiFi", "Kasur"],
    image: "https://picsum.photos/seed/mamikos-kos-5/400/300",
    detailUrl:
      "https://mamikos.com/room/kost-kota-jakarta-pusat-kost-putri-eksklusif-kost-singgahsini-samaimun-tipe-c-cempaka-putih-jakarta-pusat-2?redirection_source=home%20promo%20ngebut",
    originalPrice: 2100000,
    discountAmount: 100000,
    finalPrice: 2000000,
    priceLabel: "(Bulan pertama)",
  },
  {
    id: "kos-6",
    name: "Kost Gichelle Residence Tipe B",
    location: "Grogol Petamburan, Jakarta Barat",
    category: "Campur",
    rating: 4.5,
    remainingRooms: "Sisa 2 kamar",
    facilities: ["K. Mandi Dalam", "WiFi", "AC", "Kloset Duduk"],
    image: "https://picsum.photos/seed/mamikos-kos-6/400/300",
    detailUrl:
      "https://mamikos.com/room/kost-kota-jakarta-barat-kost-campur-eksklusif-kost-singgahsini-gichelle-residence-tipe-b-grogol-petamburan-jakarta-barat-2?redirection_source=home%20promo%20ngebut",
    originalPrice: 2300000,
    discountAmount: 200000,
    finalPrice: 2100000,
    priceLabel: "(Bulan pertama)",
  },
  {
    id: "kos-7",
    name: "Kost The Peak Bright Binus Syahdan Tipe A",
    location: "Palmerah, Jakarta Barat",
    category: "Campur",
    facilities: ["K. Mandi Dalam", "WiFi", "AC", "Kasur"],
    image: "https://picsum.photos/seed/mamikos-kos-7/400/300",
    detailUrl:
      "https://mamikos.com/room/kost-kota-jakarta-barat-kost-campur-eksklusif-kost-singgahsini-the-peak-bright-binus-syahdan-tipe-a-palmerah-jakarta-barat-2?redirection_source=home%20promo%20ngebut",
    originalPrice: 1950000,
    discountAmount: 130000,
    finalPrice: 1820000,
    priceLabel: "(Bulan pertama)",
  },
];

// ============================================
// REKOMENDASI KOS DI JAKARTA
// ============================================
export const rekomendasiKosJakarta: Kos[] = [
  {
    id: "kos-8",
    name: "Kost Hayam Wuruk Suites Co-Living Tipe Premium B",
    location: "Taman Sari, Jakarta Barat",
    category: "Campur",
    rating: 4.0,
    remainingRooms: "Sisa 2 kamar",
    facilities: ["K. Mandi Dalam", "WiFi", "AC", "Kloset Duduk", "Kasur"],
    image: "https://picsum.photos/seed/mamikos-kos-8/400/300",
    detailUrl:
      "https://mamikos.com/room/kost-kota-jakarta-barat-kost-campur-eksklusif-kost-hayam-wuruk-suites-co-living-tipe-premium-b-taman-sari-jakarta-barat-2?redirection_source=home%20recommendation",
    finalPrice: 2400000,
    priceLabel: "/bulan",
  },
  {
    id: "kos-9",
    name: "Kost Kangaroom Premium",
    location: "Grogol Petamburan, Jakarta Barat",
    category: "Putri",
    remainingRooms: "Sisa 2 kamar",
    facilities: ["K. Mandi Dalam", "WiFi", "AC", "Kloset Duduk", "Kasur"],
    image: "https://picsum.photos/seed/mamikos-kos-9/400/300",
    detailUrl:
      "https://mamikos.com/room/kost-kota-jakarta-barat-kost-putri-eksklusif-kost-kangaroom-premium-grogol-petamburan-jakarta-barat-1?redirection_source=home%20recommendation",
    finalPrice: 3500000,
    priceLabel: "/bulan",
  },
  {
    id: "kos-10",
    name: "Kost Gichelle Residence Tipe B",
    location: "Grogol Petamburan, Jakarta Barat",
    category: "Campur",
    facilities: ["K. Mandi Dalam", "WiFi", "AC", "Kloset Duduk", "Kasur"],
    image: "https://picsum.photos/seed/mamikos-kos-10/400/300",
    detailUrl:
      "https://mamikos.com/room/kost-kota-jakarta-barat-kost-campur-eksklusif-kost-singgahsini-gichelle-residence-tipe-b-grogol-petamburan-jakarta-barat-2?redirection_source=home%20recommendation",
    finalPrice: 1600000,
    priceLabel: "/bulan",
  },
  {
    id: "kos-11",
    name: "Kost Omorfia",
    location: "Taman Sari, Jakarta Barat",
    category: "Campur",
    remainingRooms: "Sisa 1 kamar",
    facilities: ["WiFi", "AC", "Kloset Duduk", "Kasur"],
    image: "https://picsum.photos/seed/mamikos-kos-11/400/300",
    detailUrl:
      "https://mamikos.com/room/kost-kota-jakarta-barat-kost-campur-eksklusif-kost-omorfia-taman-sari-jakarta-barat-2?redirection_source=home%20recommendation",
    finalPrice: 1800000,
    priceLabel: "/bulan",
  },
  {
    id: "kos-12",
    name: "Kost Cozy Coliving Cideng Deluxe Plus",
    location: "Gambir, Jakarta Pusat",
    category: "Putra",
    rating: 4.2,
    facilities: ["K. Mandi Dalam", "WiFi", "AC", "Kasur"],
    image: "https://picsum.photos/seed/mamikos-kos-12/400/300",
    detailUrl:
      "https://mamikos.com/room/kost-kota-jakarta-pusat-kost-putra-eksklusif-kost-cozy-coliving-cideng-deluxe-plus-gambir-jakarta-pusat?redirection_source=home%20recommendation",
    finalPrice: 2200000,
    priceLabel: "/bulan",
  },
  {
    id: "kos-13",
    name: "Kost Venice Tipe A",
    location: "Taman Sari, Jakarta Barat",
    category: "Campur",
    remainingRooms: "Sisa 3 kamar",
    facilities: ["K. Mandi Dalam", "WiFi", "Kasur"],
    image: "https://picsum.photos/seed/mamikos-kos-13/400/300",
    detailUrl:
      "https://mamikos.com/room/kost-kota-jakarta-barat-kost-campur-eksklusif-kost-venice-tipe-a-taman-sari-jakarta-barat?redirection_source=home%20recommendation",
    finalPrice: 1950000,
    priceLabel: "/bulan",
  },
  {
    id: "kos-14",
    name: "Kost 3Tranches Home SCBD Tipe A",
    location: "Kebayoran Baru, Jakarta Selatan",
    category: "Campur",
    rating: 4.7,
    facilities: ["K. Mandi Dalam", "WiFi", "AC", "Kloset Duduk", "Kasur"],
    image: "https://picsum.photos/seed/mamikos-kos-14/400/300",
    detailUrl:
      "https://mamikos.com/room/kost-kota-jakarta-selatan-kost-campur-eksklusif-kost-3tranches-home-scbd-tipe-a-kebayoran-baru-jakarta-selatan-1?redirection_source=home%20recommendation",
    finalPrice: 4200000,
    priceLabel: "/bulan",
  },
];

// ============================================
// KOS YANG LAGI PROMO (promo label, bukan nominal)
// ============================================
export const kosLagiPromo: Kos[] = [
  {
    id: "kos-15",
    name: "Kost Eksklusif Cenderawasih 2 Tipe Deluxe",
    location: "Depok, Sleman",
    category: "Putri",
    rating: 4.3,
    remainingRooms: "Sisa 2 kamar",
    facilities: ["K. Mandi Dalam", "WiFi", "AC", "Kloset Duduk", "Kasur"],
    image: "https://picsum.photos/seed/mamikos-kos-15/400/300",
    detailUrl:
      "https://mamikos.com/room/kost-sleman-kost-putri-eksklusif-kost-eksklusif-cenderawasih-2-tipe-deluxe-depok-sleman?redirection_source=home%20promo%20recommendation",
    finalPrice: 1750000,
    priceLabel: "/bulan",
    promoLabel: "Diskon Sewa Per 2 Bulan",
  },
  {
    id: "kos-16",
    name: "Kost Zeal 2 Residence",
    location: "Serpong Utara, Tangerang Selatan",
    category: "Campur",
    remainingRooms: "Sisa 2 kamar",
    facilities: ["K. Mandi Dalam", "WiFi", "AC", "Kloset Duduk", "Kasur"],
    image: "https://picsum.photos/seed/mamikos-kos-16/400/300",
    detailUrl:
      "https://mamikos.com/room/kost-kota-tangerang-selatan-kost-campur-eksklusif-kost-zeal-2-residence-serpong-utara-tangerang-selatan-2?redirection_source=home%20promo%20recommendation",
    finalPrice: 2600000,
    priceLabel: "/bulan",
    promoLabel: "Diskon di bulan September",
  },
  {
    id: "kos-17",
    name: "Kost Pondok Obsesi",
    location: "Cidadap, Bandung",
    category: "Putri",
    facilities: ["K. Mandi Dalam", "WiFi", "Kloset Duduk", "Kasur"],
    image: "https://picsum.photos/seed/mamikos-kos-17/400/300",
    detailUrl:
      "https://mamikos.com/room/kost-bandung-kost-putri-eksklusif-kost-pondok-obsesi-cidadap-bandung-2?redirection_source=home%20promo%20recommendation",
    finalPrice: 1500000,
    priceLabel: "/bulan",
    promoLabel: "Kostku Grand Opening",
  },
  {
    id: "kos-18",
    name: "Kost Pawon Candi Tipe A",
    location: "Ngaglik, Sleman",
    category: "Putra",
    remainingRooms: "Sisa 1 kamar",
    facilities: ["WiFi", "AC", "Kloset Duduk", "Kasur"],
    image: "https://picsum.photos/seed/mamikos-kos-18/400/300",
    detailUrl:
      "https://mamikos.com/room/kost-kabupaten-sleman-kost-putra-eksklusif-kost-pawon-candi-tipe-a-ngaglik-sleman?redirection_source=home%20promo%20recommendation",
    finalPrice: 1400000,
    priceLabel: "/bulan",
    promoLabel: "Promo Free Token Listrik",
  },
  {
    id: "kos-19",
    name: "Kost Faida Kamar Reguler",
    location: "Dramaga, Bogor",
    category: "Putri",
    facilities: ["WiFi", "Kloset Duduk", "Kasur"],
    image: "https://picsum.photos/seed/mamikos-kos-19/400/300",
    detailUrl:
      "https://mamikos.com/room/kost-kabupaten-bogor-kost-putri-eksklusif-kost-faida-kamar-reguler-dramaga-bogor?redirection_source=home%20promo%20recommendation",
    finalPrice: 1100000,
    priceLabel: "/bulan",
    promoLabel: "Diskon Bulan Pertama",
  },
  {
    id: "kos-20",
    name: "Kost Zeal 1 Tipe A",
    location: "Benda, Tangerang",
    category: "Campur",
    rating: 4.0,
    remainingRooms: "Sisa 2 kamar",
    facilities: ["K. Mandi Dalam", "WiFi", "AC", "Kloset Duduk", "Kasur"],
    image: "https://picsum.photos/seed/mamikos-kos-20/400/300",
    detailUrl:
      "https://mamikos.com/room/kost-kota-tangerang-kost-campur-eksklusif-kost-zeal-1-tipe-a-benda-tangerang-1?redirection_source=home%20promo%20recommendation",
    finalPrice: 2400000,
    priceLabel: "/bulan",
    promoLabel: "Diskon Sewa Per 2 Bulan",
  },
  {
    id: "kos-21",
    name: "Kost 3A Kos Tipe A",
    location: "Kebayoran Baru, Jakarta Selatan",
    category: "Campur",
    remainingRooms: "Sisa 2 kamar",
    facilities: ["K. Mandi Dalam", "WiFi", "AC", "Kloset Duduk", "Kasur"],
    image: "https://picsum.photos/seed/mamikos-kos-21/400/300",
    detailUrl:
      "https://mamikos.com/room/kost-kota-jakarta-selatan-kost-campur-eksklusif-kost-3a-kos-tipe-a-kebayoran-baru-jakarta-selatan?redirection_source=home%20promo%20recommendation",
    finalPrice: 3500000,
    priceLabel: "/bulan",
    promoLabel: "Diskon di bulan September",
  },
];

// ============================================
// AREA KOS TERPOPULER (URL asli asset Mamikos)
// ============================================
export const popularCities: CityLocation[] = [
  {
    id: "city-1",
    name: "Kos Yogyakarta",
    image: "https://mamikos.com/assets/area/desktop/jogja.png",
  },
  {
    id: "city-2",
    name: "Kos Jakarta",
    image: "https://mamikos.com/assets/area/desktop/jakarta.png",
  },
  {
    id: "city-3",
    name: "Kos Bandung",
    image: "https://mamikos.com/assets/area/desktop/bandung.png",
  },
  {
    id: "city-4",
    name: "Kos Surabaya",
    image: "https://mamikos.com/assets/area/desktop/surabaya.png",
  },
  {
    id: "city-5",
    name: "Kos Malang",
    image: "https://mamikos.com/assets/area/desktop/malang.png",
  },
  {
    id: "city-6",
    name: "Kos Semarang",
    image: "https://mamikos.com/assets/area/desktop/semarang.png",
  },
  {
    id: "city-7",
    name: "Kos Medan",
    image: "https://mamikos.com/assets/area/desktop/medan.png",
  },
];

// ============================================
// KOS SEKITAR KAMPUS (logo lokal di public/logo/)
// ============================================
export const campusLocations: CampusLocation[] = [
  {
    id: "campus-1",
    name: "UGM",
    city: "Jogja",
    logo: "/logo/ugm.png",
  },
  {
    id: "campus-2",
    name: "UNDIP",
    city: "Semarang",
    logo: "/logo/undip.png",
  },
  {
    id: "campus-3",
    name: "UI",
    city: "Depok",
    logo: "/logo/ui.png",
  },
  {
    id: "campus-4",
    name: "UNPAD",
    city: "Jatinangor",
    logo: "/logo/unpad.png",
  },
  {
    id: "campus-5",
    name: "STAN",
    city: "Jakarta",
    logo: "/logo/stan.png",
  },
  {
    id: "campus-6",
    name: "UB",
    city: "Malang",
    logo: "/logo/ub.png",
  },
  {
    id: "campus-7",
    name: "UNAIR",
    city: "Surabaya",
    logo: "/logo/unair.png",
  },
];

// ============================================
// LIST KOTA UNTUK DROPDOWN FILTER
// ============================================
export const cityOptions: string[] = [
  "Semua Kota",
  "Jakarta",
  "Bandung",
  "Yogyakarta",
  "Surabaya",
  "Malang",
  "Semarang",
  "Medan",
];