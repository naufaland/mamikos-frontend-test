'use client';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Image from 'next/image';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

const MAMIKOS_LINKS = ['Tentang Kami', 'Blog Mamikos', 'Karir', 'Daftarkan Properti', 'Partner'];
const KEBIJAKAN_LINKS = ['Kebijakan Privasi', 'Syarat dan Ketentuan', 'Hak & Kewajiban Penyewa'];

export function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#FFFFFF', borderTop: '1px solid', borderColor: 'grey.200' }}>
      <Container maxWidth="lg" sx={{ py: 5 }}>
        {/* Outer: col1 berjauhan dari col2-4 */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '0.8fr 2fr' },
            gap: { xs: 4, md: 10 },
            marginBottom: 6
          }}
        >
          {/* Col 1: Logo + tagline + download */}
          <Stack spacing={2}>
            <Box sx={{ height: 41, position: 'relative' }}>
              <Image
                src="/logo/logo_mamikos_green_v2.svg"
                alt="Mamikos"
                width={180}
                height={41}
                style={{ height: 41, width: 'auto' }}
              />
            </Box>
            <Typography variant="caption" color="text.secondary">
              Dapatkan "info kost murah" hanya di MamiKos App. Mau "Sewa Kost Murah"?
            </Typography>
            <Stack spacing={0.75}>
              {/* <Typography variant="caption" sx={{ fontWeight: 600 }}>
                Download App
              </Typography> */}
              <Stack direction="row" spacing={1}>
                <Box sx={{ position: 'relative', height: 40, cursor: 'pointer' }}>
                  <Image
                    src="/logo/get-it-on-playstore.svg"
                    alt="Get it on Google Play"
                    width={135}
                    height={40}
                    style={{ height: 40, width: 'auto' }}
                  />
                </Box>
                <Box sx={{ position: 'relative', height: 40, cursor: 'pointer' }}>
                  <Image
                    src="/logo/get-it-on-appstore.svg"
                    alt="Download on the App Store"
                    width={135}
                    height={40}
                    style={{ height: 40, width: 'auto' }}
                  />
                </Box>
              </Stack>
            </Stack>
          </Stack>

          {/* Col 2-3-4: sub-grid dengan gap lebih kecil */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(3, 1fr)' },
              gap: 4,
            }}
          >
            <Stack spacing={1}>
              <Typography sx={{ fontWeight: 600, fontSize: 16, mb: 0.5 }}>
                MAMIKOS
              </Typography>
              {MAMIKOS_LINKS.map((l) => (
                <Link key={l} underline="hover" sx={{ fontSize: 13, color: 'text.secondary', cursor: 'pointer' }}>
                  {l}
                </Link>
              ))}
            </Stack>

            <Stack spacing={1}>
              <Typography sx={{ fontWeight: 600, fontSize: 16, mb: 0.5 }}>
                KEBIJAKAN
              </Typography>
              {KEBIJAKAN_LINKS.map((l) => (
                <Link key={l} underline="hover" sx={{ fontSize: 13, color: 'text.secondary', cursor: 'pointer' }}>
                  {l}
                </Link>
              ))}
            </Stack>

          <Stack spacing={1}>
              <Typography sx={{ fontWeight: 600, fontSize: 16, mb: 0.5 }}>
                HUBUNGI KAMI
              </Typography>

              <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                <EmailOutlinedIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
                <Typography variant="caption" color="text.secondary">
                  Email: hello@mamikos.com
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                <WhatsAppIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
                <Typography variant="caption" color="text.secondary">
                  WhatsApp: 0811-1600-888
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1.5} sx={{ mt: 1 }}>
                <FacebookOutlinedIcon
                  sx={{ fontSize: 22, color: 'text.primary', cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
                />
                <XIcon
                  sx={{ fontSize: 20, color: 'text.primary', cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
                />
                <InstagramIcon
                  sx={{ fontSize: 22, color: 'text.primary', cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
                />
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 2,
            marginBottom: 2
          }}
        >
          <Box sx={{ position: 'relative', height: 48, width: 48 }}>
            <Image
              src="/logo/iso-certificate-v2.svg"
              alt="ISO Certificate"
              fill
              style={{ objectFit: 'contain' }}
            />
          </Box>

          <Typography variant="caption" color="text.secondary">
            © {new Date().getFullYear()} Mamikos.com. All rights reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}