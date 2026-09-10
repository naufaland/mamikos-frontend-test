export type KosCategory = "Putra" | "Putri" | "Campur";

export interface Kos {
  id: string;
  name: string;
  location: string;
  category: KosCategory;
  rating?: number; // optional, tidak semua kos punya rating
  remainingRooms?: string; // e.g. "Sisa 3 kamar"
  facilities: string[]; // e.g. ["K. Mandi Dalam", "WiFi", "AC", "Kloset Duduk", "Kasur"]
  image: string;
  detailUrl?: string; // link ke halaman detail produk asli mamikos.com
  originalPrice?: number; // harga sebelum diskon nominal
  discountAmount?: number; // nominal diskon, e.g. 78000
  finalPrice: number; // harga final per bulan pertama
  priceLabel: string; // e.g. "(Bulan pertama)" atau "/bulan"
  promoLabel?: string; // untuk kos jenis "lagi promo": teks promo, e.g. "Diskon Sewa Per 2 Bulan"
}

export interface CityLocation {
  id: string;
  name: string; // e.g. "Kos Yogyakarta"
  image: string;
}

export interface CampusLocation {
  id: string;
  name: string; // e.g. "UGM"
  city: string; // e.g. "Jogja"
  logo: string;
}

export interface PromoBanner {
  id: string;
  image: string;
  alt: string;
  link: string; // link tujuan saat banner diklik
}