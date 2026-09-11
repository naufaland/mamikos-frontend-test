import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { SearchBar } from '@/components/ui/SearchBar';

export function HeroSection() {
  return (
    <Box
      sx={{
        bgcolor: 'white',
        borderBottom: '1px solid',
        borderColor: 'grey.100',
        py: { xs: 5, md: 7 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: { xs: 200, md: 250 },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            right: { xs: -40, sm: 0, md: 0 },
            bottom: 0,
            width: { xs: 350, md: 750, lg: 850 },
            height: '100%',
            backgroundImage: 'url("/pics/bg_hero_section_top.png")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: { xs: 'contain', md: 'auto 100%' },
            backgroundPosition: 'right bottom',
            zIndex: -1,
            pointerEvents: 'none',
          }}
        />

        <Box sx={{ maxWidth: { xs: '100%', md: '55%' }, position: 'relative' }}>
          <Typography
            variant="h3"
            sx={{ mb: 0.75, fontSize: { xs: 28, md: 36 }, color: 'grey.900', fontWeight: 800 }}
          >
            Mau cari kos?
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 3, fontSize: { xs: 14, md: 16 } }}
          >
            Dapatkan infonya dan langsung sewa di Mamikos.
          </Typography>

          <Box id="hero-search-anchor">
            <SearchBar />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
