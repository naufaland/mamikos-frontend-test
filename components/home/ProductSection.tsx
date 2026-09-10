'use client';
import { useState } from 'react';
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
import Grid from '@mui/material/Grid';
import { ProductCard } from '@/components/ui/ProductCard';
import { Kos } from '@/types';
import { cityOptions } from '@/data/mock-data';

interface ProductSectionProps {
  title: string;
  highlightTitle?: string;
  data: Kos[];
  showCityDropdown?: boolean;
  showCountdown?: boolean;
  countdownDays?: number;
  countdownTime?: string;
}

export function ProductSection({
  title,
  highlightTitle,
  data,
  showCityDropdown = false,
  showCountdown = false,
  countdownDays = 14,
  countdownTime = '11 : 12 : 15',
}: ProductSectionProps) {
  const [selectedCity, setSelectedCity] = useState(cityOptions[0]);

  const displayedItems = data.slice(0, 4);

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
          {/* Title + optional dropdown */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              {title}
            </Typography>
            {highlightTitle && (
              <>
                <Typography variant="h6" sx={{ fontWeight: 700 }} color="primary.main">
                  {highlightTitle}
                </Typography>
                {showCityDropdown && (
                  <Select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    size="small"
                    IconComponent={KeyboardArrowDownIcon}
                    sx={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: 'primary.main',
                      '.MuiOutlinedInput-notchedOutline': { border: 'none' },
                      '.MuiSelect-select': { py: 0.5 },
                    }}
                  >
                    {cityOptions.map((city) => (
                      <MenuItem key={city} value={city}>
                        {city}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              </>
            )}
          </Box>

          {/* Right: countdown + Lihat semua + arrows */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap' }}>
            {showCountdown && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="caption" color="text.secondary">
                  Akan Berakhir dalam waktu:
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    bgcolor: 'grey.100',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>
                    {countdownDays} Hari
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700 }} color="primary.main">
                    {countdownTime}
                  </Typography>
                </Box>
              </Box>
            )}
            <Button variant="text" sx={{ fontSize: 13, fontWeight: 600, color: 'text.primary' }}>
              Lihat semua
            </Button>
            <IconButton size="small" sx={{ border: '1px solid', borderColor: 'grey.300' }}>
              <ChevronLeftIcon />
            </IconButton>
            <IconButton size="small" sx={{ border: '1px solid', borderColor: 'grey.300' }}>
              <ChevronRightIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Grid */}
        <Grid container spacing={2}>
          {displayedItems.map((kos) => (
            <Grid key={kos.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <ProductCard kos={kos} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
