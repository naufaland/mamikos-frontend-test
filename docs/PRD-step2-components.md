# PRD — Step 2: Component Implementation & Page Composition

## 1. Overview
Tahap kedua pembangunan clone landing page Mamikos.com. Fokus tahap ini adalah **mengisi seluruh komponen placeholder** dari Step 1 dengan implementasi visual nyata sesuai referensi mamikos.com, menggunakan data dari `data/mock-data.ts`, lalu meng-compose semuanya menjadi satu halaman utuh di `app/page.tsx`.

## 2. Goals
- Seluruh section landing page mamikos.com ter-representasikan secara visual
- Komponen reusable (`ProductCard`, `LocationCard`, `ProductSection`, `LocationGrid`) benar-benar dipakai ulang, bukan duplikasi kode antar section
- Halaman responsive minimal di 3 breakpoint: mobile, tablet, desktop
- Tidak ada error di console maupun visual glitch saat `npm run dev`

## 3. Non-Goals (Out of Scope)
- Fungsi search yang benar-benar memfilter data (cukup UI, tidak perlu logic filter nyata)
- Autentikasi/halaman "Masuk"
- Halaman detail kos / halaman lain di luar landing page
- Animasi kompleks di luar carousel dasar

## 4. Functional Requirements

### 4.1 Layout Components
| Komponen | Requirement |
|----------|-------------|
| `TopBar` | Strip abu muda, full width. Kiri: "Download App", "Sewa Kos" (icon + text). Kanan: "Promosikan Iklan Anda". Font ±13px |
| `Navbar` | Logo "mamikos" hijau kiri. Kanan: dropdown "Cari Apa?", link "Pusat Bantuan", link "Syarat dan Ketentuan", button outlined hijau "Masuk". Sticky saat scroll |
| `Footer` | 4 kolom: (1) logo+tagline+app store badge, (2) grup link MAMIKOS, (3) grup link KEBIJAKAN, (4) HUBUNGI KAMI + social icons. Bottom bar: badge sertifikasi + copyright |

### 4.2 UI Components (Reusable)
| Komponen | Props | Requirement |
|----------|-------|-------------|
| `SearchBar` | — | TextField + icon search + button hijau "Cari". Dipakai di Hero & Navbar (scrolled state) |
| `ProductCard` | `kos: Kos` | Foto (4:3), badge kategori, rating (jika ada), sisa kamar (jika ada), nama, lokasi, fasilitas truncated, harga (3 varian: diskon nominal / promo label / harga polos) |
| `LocationCard` | `name: string`, `image: string` | Background image + overlay gradient + text putih bold |

### 4.3 Home Section Components
| Komponen | Requirement |
|----------|-------------|
| `HeroSection` | Headline "Mau cari kos?" + subheadline + `SearchBar` |
| `PromoCarousel` | Carousel embla dari `promoBanners`, tombol prev/next, teks "Lihat semua promo" |
| `RegisterKosBanner` | Card CTA "Daftarkan Kos Anda di Mamikos" + button outline "Pelajari Lebih Lanjut" |
| `InfoCard` | Reusable card info (dipakai 2x: "Survei Kos" & "Kos Dikelola Mamikos") |
| `ProductSection` | Wrapper: title + dropdown kota (opsional) + countdown (opsional) + "Lihat semua" + grid 4 kolom `ProductCard` |
| `LocationGrid` | Wrapper: title + grid 4x2 `LocationCard` + card terakhir "Lihat semua →" |
| `SeoDescription` | Judul + paragraf deskriptif + accordion "Fitur yang dapat dimanfaatkan" |

### 4.4 Page Composition (`app/page.tsx`)
Urutan section sesuai referensi asli:
1. TopBar
2. Navbar
3. HeroSection
4. PromoCarousel
5. RegisterKosBanner
6. InfoCard (Survei Kos)
7. InfoCard (Kos Dikelola Mamikos)
8. ProductSection (data: `promoNgebutKos`, showCountdown: true)
9. ProductSection (data: `rekomendasiKosJakarta`)
10. ProductSection (data: `kosLagiPromo`)
11. LocationGrid (data: `popularCities`)
12. LocationGrid (data: `campusLocations`, variant: campus style)
13. SeoDescription
14. Footer

## 5. Non-Functional Requirements
- **Reusability:** `ProductSection` harus dipakai 3x dengan props berbeda, bukan 3 komponen terpisah
- **Responsive:** grid 4 kolom → 2 kolom (tablet) → 1 kolom (mobile), mengikuti breakpoint default MUI
- **Performance:** semua gambar pakai `next/image`, bukan `<img>`
- **Accessibility dasar:** `alt` text terisi di semua image, button/link punya label yang jelas

## 6. Data Mapping Reference
| Section | Data Source |
|---------|-------------|
| PromoCarousel | `promoBanners` |
| ProductSection #1 (Promo Ngebut) | `promoNgebutKos` |
| ProductSection #2 (Rekomendasi Jakarta) | `rekomendasiKosJakarta` |
| ProductSection #3 (Lagi Promo) | `kosLagiPromo` |
| LocationGrid #1 (Area Populer) | `popularCities` |
| LocationGrid #2 (Kampus) | `campusLocations` |
| Dropdown kota | `cityOptions` |

## 7. Acceptance Criteria
- [ ] Seluruh 14 section pada Section 4.4 tampil sesuai urutan
- [ ] `ProductCard` menampilkan 3 varian harga dengan benar sesuai data (diskon nominal / promo label / harga polos)
- [ ] Grid responsive teruji minimal di lebar layar 375px (mobile), 768px (tablet), 1280px (desktop)
- [ ] Tidak ada console error/warning terkait image domain, hydration, atau missing key di list
- [ ] `npm run dev` dan build (`npm run build`) berjalan sukses tanpa error TypeScript

## 8. Dependencies / Prasyarat
- Step 1 (foundation) sudah selesai dan lolos acceptance criteria-nya
- `theme/theme.ts`, `app/layout.tsx`, `next.config.ts` sudah terkonfigurasi

## 9. Risks
| Risk | Mitigasi |
|------|----------|
| Scope terlalu besar untuk 1 prompt, agent bisa timeout/hasil tidak lengkap | Bisa dipecah lebih lanjut per kelompok komponen (layout → ui → home) jika diperlukan saat eksekusi |
| Carousel embla butuh setup client component (`"use client"`) | Pastikan komponen dengan interaksi (`PromoCarousel`, dropdown, accordion) diberi directive `"use client"` |
| Truncate fasilitas di `ProductCard` bisa berbeda-beda panjang per device | Gunakan CSS `text-overflow: ellipsis` atau logic slice array di JS, pilih salah satu secara konsisten |
