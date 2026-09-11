'use client';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import BusinessIcon from '@mui/icons-material/Business';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { SearchBar } from '@/components/ui/SearchBar';
import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  // true = hero search sudah tidak terlihat → tampilkan SearchBar di navbar
  const [showSearchInNavbar, setShowSearchInNavbar] = useState(false);

  const handleMenuOpen = (e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  // Common style untuk menu item agar ada garis bawah hijau saat di hover
  const navItemSx = {
    fontSize: 13,
    color: 'text.primary',
    fontWeight: 500,
    position: 'relative',
    borderRadius: 1,
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -14,
      left: 0,
      width: '100%',
      height: '3px',
      backgroundColor: 'primary.main',
      transform: 'scaleX(0)',
      transition: 'transform 0.2s ease',
      transformOrigin: 'center',
      borderTopLeftRadius: 3,
      borderTopRightRadius: 3,
    },
    '&:hover': {
      bgcolor: 'transparent',
    },
    '&:hover::after': {
      transform: 'scaleX(1)',
    },
  };

  useEffect(() => {
    const heroSearchAnchor = document.getElementById('hero-search-anchor');
    // Jika anchor tidak ada di halaman ini, tidak perlu observer
    if (!heroSearchAnchor) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Tampilkan search di navbar saat hero search TIDAK terlihat (sudah discroll)
        setShowSearchInNavbar(!entry.isIntersecting);
      },
      { rootMargin: '-64px 0px 0px 0px', threshold: 0 }
    );

    observer.observe(heroSearchAnchor);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      component="nav"
      sx={{
        height: 64, // Tinggi navbar fix 64px
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'white',
        borderBottom: '1px solid',
        borderColor: 'grey.200',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ height: '100%' }}>
        <Stack
          direction="row"
          sx={{ height: '100%', alignItems: 'center', justifyContent: 'space-between' }}
          spacing={2}
        >
          {/* Left area: Logo & SearchBar grouped together */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
            {/* Logo */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              <Box
                sx={{
                  overflow: 'hidden',
                  // 140px untuk full logo, 36px untuk ikon kepala saja
                  width: showSearchInNavbar ? 36 : 140,
                  transition: 'none', // Menghilangkan animasi transisi agar instant
                  display: 'flex',
                  alignItems: 'center',
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/logo/logo_mamikos_green_v2.svg"
                  alt="Mamikos"
                  width={140}
                  height={32}
                  priority
                  style={{ width: 140, height: 32, maxWidth: 'none', flexShrink: 0 }}
                />
              </Box>
            </Link>

            {/* SearchBar — muncul saat hero search sudah tidak terlihat */}
            <Box
              sx={{
                flex: 1,
                maxWidth: 480,
                display: { xs: 'none', md: showSearchInNavbar ? 'flex' : 'none' },
              }}
            >
              <SearchBar />
            </Box>
          </Box>

          {/* Right nav items */}
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Button
              endIcon={<KeyboardArrowDownIcon />}
              onClick={handleMenuOpen}
              sx={{ ...navItemSx, display: { xs: 'none', md: 'inline-flex' } }}
            >
              Cari Apa?
            </Button>
            <Menu 
              anchorEl={anchorEl} 
              open={Boolean(anchorEl)} 
              onClose={handleMenuClose}
              PaperProps={{
                sx: { 
                  mt: 1, 
                  minWidth: 260, 
                  borderRadius: 2, 
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)' 
                }
              }}
            >
              <MenuItem onClick={handleMenuClose} sx={{ py: 1.5, gap: 2, fontWeight: 500, fontSize: 15 }}>
                <SingleBedIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                Kos
              </MenuItem>
              <MenuItem onClick={handleMenuClose} sx={{ py: 1.5, gap: 2, fontWeight: 500, fontSize: 15 }}>
                <Image src="/logo/icon-singgahsini.svg" alt="Singgahsini" width={16} height={16} style={{ objectFit: 'contain' }} />
                Kos Singgahsini & Apik
              </MenuItem>
              <MenuItem onClick={handleMenuClose} sx={{ py: 1.5, gap: 2, fontWeight: 500, fontSize: 15 }}>
                <Image src="/logo/icon-kos-andalan.svg" alt="Kos Andalan" width={16} height={16} style={{ objectFit: 'contain' }} />
                Kos Andalan
              </MenuItem>
              <MenuItem onClick={handleMenuClose} sx={{ py: 1.5, gap: 2, fontWeight: 500, fontSize: 15 }}>
                <BusinessIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                Apartemen
              </MenuItem>
              <MenuItem onClick={handleMenuClose} sx={{ py: 1.5, gap: 2, fontWeight: 500, fontSize: 15 }}>
                <HomeOutlinedIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                Jual-Beli Properti
              </MenuItem>
            </Menu>

            <Button sx={{ ...navItemSx, display: { xs: 'none', md: 'inline-flex' } }}>
              Pusat Bantuan
            </Button>
            <Button
              sx={{
                ...navItemSx,
                display: { xs: 'none', lg: 'inline-flex' },
              }}
            >
              Syarat dan Ketentuan
            </Button>
            <Button
              variant="outlined"
              sx={{
                fontSize: 13,
                fontWeight: 600,
                borderColor: 'primary.main',
                color: 'primary.main',
                borderRadius: 2,
                px: 2,
                '&:hover': { bgcolor: 'primary.main', color: 'white' },
              }}
            >
              Masuk
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
