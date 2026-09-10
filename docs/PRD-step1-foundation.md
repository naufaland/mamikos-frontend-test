# PRD — Step 1: Project Foundation Setup

## 1. Overview
Tahap pertama pembangunan clone landing page Mamikos.com. Fokus tahap ini adalah menyiapkan **fondasi teknis** project — theme, provider, konfigurasi, dan struktur folder — sebelum masuk ke implementasi UI komponen di Step 2.

## 2. Goals
- Project dapat dijalankan (`npm run dev`) tanpa error setelah setup selesai
- Seluruh dependency yang dibutuhkan untuk tahap berikutnya sudah terpasang
- Struktur folder final sudah terbentuk (walau isi komponen masih placeholder)
- MUI theme custom sudah terpasang dan konsisten dengan brand Mamikos

## 3. Non-Goals (Out of Scope)
- Implementasi visual/isi komponen (masuk Step 2)
- Compose halaman `app/page.tsx` (masuk Step 2)
- Responsive behavior detail per komponen (masuk Step 2)
- Integrasi data asli/API (di luar scope keseluruhan test)

## 4. Functional Requirements

| ID | Requirement | Detail |
|----|-------------|--------|
| F1 | Install dependency UI & carousel | `@mui/material`, `@mui/icons-material`, `@emotion/react`, `@emotion/styled`, `embla-carousel-react`, `embla-carousel-autoplay` |
| F2 | Custom MUI Theme | File `theme/theme.ts`, primary color `#1BAA56`, font Poppins, border-radius default untuk `Button` & `Card` di-override agar rounded |
| F3 | Root Layout Setup | `app/layout.tsx` menggunakan `ThemeProvider` + `CssBaseline` dari MUI, font Poppins di-load via `next/font/google` |
| F4 | Struktur Folder Komponen | Folder `components/layout/`, `components/home/`, `components/ui/` dengan file placeholder sesuai daftar di Section 6 |
| F5 | Image Remote Config | `next.config.ts` menambahkan `images.remotePatterns` untuk domain `picsum.photos` dan `ui-avatars.com` |

## 5. Non-Functional Requirements
- **Konsistensi:** semua komponen placeholder harus named export function (bukan default export), sesuai konvensi di `AGENTS.md`
- **Type Safety:** tidak ada penggunaan `any`, seluruh file `.tsx` bertipe eksplisit
- **No Breaking Change:** file `types/index.ts` dan `data/mock-data.ts` yang sudah ada tidak boleh diubah strukturnya

## 6. File/Folder yang Dihasilkan

```
theme/theme.ts                          [BARU]
app/layout.tsx                          [DIMODIFIKASI]
next.config.ts                          [DIMODIFIKASI]
components/layout/TopBar.tsx            [BARU - placeholder]
components/layout/Navbar.tsx            [BARU - placeholder]
components/layout/Footer.tsx            [BARU - placeholder]
components/home/HeroSection.tsx         [BARU - placeholder]
components/home/PromoCarousel.tsx       [BARU - placeholder]
components/home/RegisterKosBanner.tsx   [BARU - placeholder]
components/home/InfoCard.tsx            [BARU - placeholder]
components/home/ProductSection.tsx      [BARU - placeholder]
components/home/LocationGrid.tsx        [BARU - placeholder]
components/home/SeoDescription.tsx      [BARU - placeholder]
components/ui/ProductCard.tsx           [BARU - placeholder]
components/ui/LocationCard.tsx          [BARU - placeholder]
components/ui/SearchBar.tsx             [BARU - placeholder]
```

## 7. Acceptance Criteria
- [ ] `npm run dev` berjalan tanpa error di terminal maupun browser console
- [ ] Halaman kosong (placeholder) ter-render tanpa layout shift/crash
- [ ] Font Poppins terlihat aktif (bisa dicek lewat DevTools → Computed font-family)
- [ ] Warna primary hijau `#1BAA56` bisa dipanggil lewat `theme.palette.primary.main`
- [ ] Tidak ada warning terkait `next/image` domain saat komponen nanti mulai pakai gambar dari mock data

## 8. Dependencies / Prasyarat
- File `types/index.ts` dan `data/mock-data.ts` sudah tersedia di project
- File `AGENTS.md` sudah tersedia sebagai acuan konvensi

## 9. Risks
| Risk | Mitigasi |
|------|----------|
| Konflik versi MUI v6 dengan Next.js 15 App Router (SSR/Emotion cache) | Gunakan pattern resmi MUI untuk App Router (`AppRouterCacheProvider`) jika terjadi FOUC/hydration warning |
| Agent membuat struktur folder berbeda dari spesifikasi | Struktur folder dicantumkan eksplisit di prompt, bukan deskriptif |
