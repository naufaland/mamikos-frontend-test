import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TopBar } from '@/components/layout/TopBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { PromoCarousel } from '@/components/home/PromoCarousel';
import { RegisterKosBanner } from '@/components/home/RegisterKosBanner';
import { InfoCard } from '@/components/home/InfoCard';
import { ProductSection } from '@/components/home/ProductSection';
import { LocationGrid } from '@/components/home/LocationGrid';
import { SeoDescription } from '@/components/home/SeoDescription';
import {
  promoNgebutKos,
  rekomendasiKosJakarta,
  kosLagiPromo,
  popularCities,
  campusLocations,
} from '@/data/mock-data';

export const metadata = {
  title: 'Mamikos — Cari Kos Mudah dan Terpercaya',
  description:
    'Temukan kos putra, putri, dan campur di seluruh Indonesia. Cari, survei, dan sewa kos impian kamu di Mamikos.',
};

export default function Home() {
  // InfoCard #2 logo area
  const singgahSiniLogo = (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Typography variant="body2" sx={{ fontWeight: 700, color: '#7B3FA6', fontSize: 14 }}>
        𝕊 singgah sini
      </Typography>
      <Typography variant="body2" sx={{ fontWeight: 800, color: '#7B3FA6', fontSize: 16 }}>
        apik
      </Typography>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header Container: membungkus TopBar dan Navbar agar lengket bersamaan */}
      <Box
        component="header"
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1100,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* 1. TopBar */}
        <TopBar />

        {/* 2. Navbar */}
        <Navbar />
      </Box>

      <Box component="main" sx={{ flex: 1 }}>
        {/* 3. HeroSection */}
        <HeroSection />

        {/* 4. PromoCarousel */}
        <PromoCarousel />

        {/* 5. RegisterKosBanner */}
        <RegisterKosBanner />

        {/* 6. InfoCard — Survei Kos */}
        <InfoCard
          variant="survey"
          title="Survei Kos Idaman Kamu Sekarang!"
          description="Untungnya ada fitur Survei Kos di Mamikos. Cari, pilih, survei, hingga sewa kos idaman dijamin aman dan GRATIS."
          linkText="Baca selengkapnya"
        />

        {/* 7. InfoCard — Kos Dikelola Mamikos */}
        <InfoCard
          variant="managed"
          title="Kos Dikelola Mamikos, Terjamin Nyaman"
          description="Disurvey langsung oleh Mamikos. Lokasi terverifikasi, bangunan kos lolos seleksi."
        />

        {/* 8. ProductSection — Promo Ngebut (with countdown) */}
        <ProductSection
          title="Promo Ngebut"
          highlightTitle="Semua Kota"
          data={promoNgebutKos}
          showCityDropdown
          showCountdown
          countdownDays={14}
          countdownTime="11 : 12 : 15"
        />

        {/* 9. ProductSection — Rekomendasi Jakarta */}
        <ProductSection
          title="Rekomendasi kos di"
          highlightTitle="Jakarta"
          data={rekomendasiKosJakarta}
          showCityDropdown
        />

        {/* 10. ProductSection — Kos Lagi Promo */}
        <ProductSection
          title="Kos yang lagi promo di"
          highlightTitle="Semua Kota"
          data={kosLagiPromo}
          showCityDropdown
        />

        {/* 11. LocationGrid — Area Terpopuler */}
        <LocationGrid
          variant="city"
          title="Area Kos Terpopuler"
          data={popularCities}
        />

        {/* 12. LocationGrid — Kos Sekitar Kampus */}
        <LocationGrid
          variant="campus"
          title="Kos Sekitar Kampus"
          data={campusLocations}
        />

        {/* 13. SeoDescription */}
        <SeoDescription />
      </Box>

      {/* 14. Footer */}
      <Footer />
    </Box>
  );
}
