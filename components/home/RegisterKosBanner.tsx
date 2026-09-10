import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';

export function RegisterKosBanner() {
  return (
    <Box sx={{ py: 2, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            border: '1px solid',
            borderColor: 'grey.200',
            borderRadius: 2,
            p: { xs: 2.5, md: 3 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            position: 'relative',
            overflow: 'hidden',
            '&::after': {
              content: '""',
              position: 'absolute',
              right: 120,
              top: 0,
              bottom: 0,
              width: 200,
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Cellipse cx='100' cy='100' rx='180' ry='80' fill='%231BAA5608'/%3E%3C/svg%3E\")",
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            },
          }}
        >
          <Box>
            <Typography sx={{ fontSize: '20px', fontWeight: 700, mb: 0.5 }}>
              Daftarkan Kos Anda di Mamikos
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: '16px', mb: 2 }}>
              Berbagai fitur dan layanan untuk meningkatkan bisnis kos Anda
            </Typography>
            <Button
              variant="outlined"
              sx={{
                fontSize: 13,
                fontWeight: 600,
                borderColor: 'primary.main',
                color: 'primary.main',
                borderRadius: 2,
                '&:hover': { bgcolor: 'primary.main', color: 'white' },
              }}
            >
              Pelajari Lebih Lanjut
            </Button>
          </Box>

          {/* Owner entry image */}
          <Image
            src="/pics/landing-owner-entry.webp"
            alt="Daftar Kos Mamikos"
            width={350} // Beri width yang cukup besar
            height={150} // Atau biarkan next/image menghitung proporsinya
            style={{ 
              position: 'absolute',
              right: 0,
              height: '300px',
              width: 'auto',
              objectFit: 'cover',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
