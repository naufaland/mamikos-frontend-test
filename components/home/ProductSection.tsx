'use client';
import { useState, useRef } from 'react';
import { useCountdown } from '@/hooks/useCountdown';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ProductCard } from '@/components/ui/ProductCard';
import { Kos } from '@/types';
import { cityOptions } from '@/data/mock-data';

const CARD_WIDTH = 266;
const CARD_GAP = 16; // gap antar card (px)
const SCROLL_AMOUNT = CARD_WIDTH + CARD_GAP; // scroll 1 card per klik

interface ProductSectionProps {
  title: string;
  data: Kos[];
  showCityDropdown?: boolean;
  showCountdown?: boolean;
  sectionType?: 'ngebut' | 'promo' | 'rekomendasi';
}

export function ProductSection({
  title,
  data,
  showCityDropdown = false,
  showCountdown = false,
  sectionType = 'rekomendasi',
}: ProductSectionProps) {
  const [selectedCity, setSelectedCity] = useState(cityOptions[0]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const countdown = useCountdown(7, 'promo_ngebut_countdown');

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
  };

  return (
    <Box sx={{ py: 3, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        {/* Header row */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            justifyContent: 'space-between',
            gap: 1.5,
            mb: 2,
          }}
        >
          {/* Title + dropdown langsung di samping */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexWrap: 'wrap' }}>
            <Typography sx={{ fontWeight: 700, fontSize: '20px', lineHeight: 1.3 }}>
              {title}
            </Typography>
            {showCityDropdown && (
              <Select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                size="small"
                IconComponent={KeyboardArrowDownIcon}
                sx={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: 'primary.main',
                  '.MuiOutlinedInput-notchedOutline': { border: 'none' },
                  '.MuiSelect-select': { py: 0, pl: 0 },
                }}
              >
                {cityOptions.map((city) => (
                  <MenuItem key={city} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </Select>
            )}
          </Box>

          {/* Right: countdown + Lihat semua + divider + arrows */}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1.5, 
              flexWrap: 'wrap', // Allow wrapping on small screens
              width: '100%',
              justifyContent: { xs: 'flex-start', sm: 'flex-end' } 
            }}
          >
            {showCountdown && countdown.mounted && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                {/* Label dua baris */}
                <Typography
                  sx={{
                    fontSize: 12,
                    fontWeight: 450,
                    color: 'text.secondary',
                    lineHeight: 1.3,
                  }}
                >
                  Akan Berakhir<br />dalam waktu:
                </Typography>

                {/* Pill: X Hari */}
                <Box
                  sx={{
                    bgcolor: 'grey.100',
                    borderRadius: '8px',
                    px: 1.5,
                    py: 0.5,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Typography sx={{ fontSize: 14, fontWeight: 700, whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums' }}>
                    {countdown.days} Hari
                  </Typography>
                </Box>

                {/* HH : MM : SS — masing-masing dalam pill terpisah */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {[
                    String(countdown.hours).padStart(2, '0'),
                    String(countdown.minutes).padStart(2, '0'),
                    String(countdown.seconds).padStart(2, '0'),
                  ].map((unit, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {i > 0 && (
                        <Typography sx={{ fontSize: 14, fontWeight: 700, color: 'text.secondary' }}>:</Typography>
                      )}
                      <Box
                        sx={{
                          bgcolor: 'grey.100',
                          borderRadius: '8px',
                          px: 1.5,
                          py: 0.5,
                          minWidth: 40,
                          textAlign: 'center',
                        }}
                      >
                        <Typography sx={{ fontSize: 14, fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>
                          {unit}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            )}

            {/* Lihat semua — outlined */}
            <Button
              variant="outlined"
              size="small"
              sx={{
                fontSize: 13,
                fontWeight: 600,
                color: 'text.primary',
                borderColor: 'grey.300',
                borderRadius: '8px',
                px: 2,
                py: 0.75,
                textTransform: 'none',
                '&:hover': { borderColor: 'grey.400', bgcolor: 'grey.50' },
              }}
            >
              Lihat semua
            </Button>

            {/* Divider vertikal */}
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                width: '1px',
                height: 28,
                bgcolor: 'grey.300',
              }}
            />

            {/* Nav arrows */}
            <Box sx={{ display: 'flex', gap: 0.5 }}>
              <IconButton
                size="small"
                onClick={scrollLeft}
                sx={{ border: '1px solid', borderColor: 'grey.300', borderRadius: '8px' }}
              >
                <ChevronLeftIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                onClick={scrollRight}
                sx={{ border: '1px solid', borderColor: 'grey.300', borderRadius: '8px' }}
              >
                <ChevronRightIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>

        </Box>

        {/* Horizontal scroll container */}
        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            gap: `${CARD_GAP}px`,
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            pb: 1,
            // Buat scroll container tembus ke ujung layar di mobile
            mx: { xs: -2, sm: -3, lg: 0 },
            px: { xs: 2, sm: 3, lg: 0 },
            /* Hide scrollbar tapi tetap bisa scroll */
            '&::-webkit-scrollbar': { display: 'none' },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {data.map((kos, index) => (
            <Box 
              key={kos.id} 
              sx={{ 
                scrollSnapAlign: 'start', 
                flexShrink: 0,
                // Beri margin kanan tambahan di elemen terakhir agar scroll tidak mentok
                mr: index === data.length - 1 ? { xs: 2, sm: 3, lg: 0 } : 0 
              }}
            >
              <ProductCard kos={kos} sectionType={sectionType} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
