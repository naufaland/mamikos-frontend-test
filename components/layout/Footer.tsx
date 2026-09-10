import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';

const MAMIKOS_LINKS = ['Tentang Kami', 'Blog Mamikos', 'Karir', 'Daftarkan Properti', 'Partner'];
const KEBIJAKAN_LINKS = ['Kebijakan Privasi', 'Syarat dan Ketentuan', 'Hak & Kewajiban Penyewa'];
const SOSMED = ['Instagram', 'Facebook', 'Twitter', 'YouTube'];

export function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#FAFAFA', borderTop: '1px solid', borderColor: 'grey.200', mt: 6 }}>
      <Container maxWidth="lg" sx={{ py: 5 }}>
        {/* Main 4-col grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' },
            gap: 4,
          }}
        >
          {/* Col 1: Logo + tagline */}
          <Stack spacing={1.5}>
            <Typography
              variant="h6"
              sx={{ color: 'primary.main', fontWeight: 800, fontSize: 20 }}
            >
              mamikos
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Platform pencarian dan manajemen kos terbaik di Indonesia.
            </Typography>
            <Stack spacing={0.75}>
              <Typography variant="caption" sx={{ fontWeight: 600 }}>
                Download App
              </Typography>
              <Stack direction="row" spacing={1}>
                <Box
                  sx={{
                    bgcolor: 'black',
                    color: 'white',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    fontSize: 11,
                    cursor: 'pointer',
                  }}
                >
                  App Store
                </Box>
                <Box
                  sx={{
                    bgcolor: 'black',
                    color: 'white',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    fontSize: 11,
                    cursor: 'pointer',
                  }}
                >
                  Google Play
                </Box>
              </Stack>
            </Stack>
          </Stack>

          {/* Col 2: MAMIKOS */}
          <Stack spacing={1}>
            <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5 }}>
              MAMIKOS
            </Typography>
            {MAMIKOS_LINKS.map((l) => (
              <Link key={l} underline="hover" sx={{ fontSize: 13, color: 'text.secondary', cursor: 'pointer' }}>
                {l}
              </Link>
            ))}
          </Stack>

          {/* Col 3: KEBIJAKAN */}
          <Stack spacing={1}>
            <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5 }}>
              KEBIJAKAN
            </Typography>
            {KEBIJAKAN_LINKS.map((l) => (
              <Link key={l} underline="hover" sx={{ fontSize: 13, color: 'text.secondary', cursor: 'pointer' }}>
                {l}
              </Link>
            ))}
          </Stack>

          {/* Col 4: Hubungi Kami */}
          <Stack spacing={1}>
            <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5 }}>
              HUBUNGI KAMI
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Email: hello@mamikos.com
            </Typography>
            <Typography variant="caption" color="text.secondary">
              WhatsApp: 0811-1600-888
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
              {SOSMED.map((s) => (
                <Box
                  key={s}
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: 'grey.200',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 10,
                    cursor: 'pointer',
                    '&:hover': { bgcolor: 'primary.main', color: 'white' },
                  }}
                >
                  {s[0]}
                </Box>
              ))}
            </Stack>
          </Stack>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Bottom bar */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography variant="caption" color="text.secondary">
            © {new Date().getFullYear()} PT Yokke Mitra Sejahtera. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={1}>
            {['ISO 27001', 'KOMINFO'].map((badge) => (
              <Box
                key={badge}
                sx={{
                  border: '1px solid',
                  borderColor: 'grey.300',
                  borderRadius: 1,
                  px: 1.5,
                  py: 0.25,
                  fontSize: 11,
                  color: 'text.secondary',
                }}
              >
                {badge}
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
