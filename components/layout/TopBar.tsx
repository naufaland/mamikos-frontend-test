import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import HomeIcon from '@mui/icons-material/Home';
import CampaignIcon from '@mui/icons-material/Campaign';

export function TopBar() {
  return (
    <Box sx={{ bgcolor: '#F5F5F5', borderBottom: '1px solid', borderColor: 'grey.200' }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            py: 0.75,
          }}
        >
          {/* Left */}
          <Stack direction="row" spacing={2.5}>
            <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center', cursor: 'pointer' }}>
              <PhoneAndroidIcon sx={{ fontSize: 15, color: 'text.secondary' }} />
              <Typography variant="caption" sx={{ fontSize: 12.5, color: 'text.secondary' }}>
                Download App
              </Typography>
            </Stack>
            <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center', cursor: 'pointer' }}>
              <HomeIcon sx={{ fontSize: 15, color: 'text.secondary' }} />
              <Typography variant="caption" sx={{ fontSize: 12.5, color: 'text.secondary' }}>
                Sewa Kos
              </Typography>
            </Stack>
          </Stack>

          {/* Right */}
          <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center', cursor: 'pointer' }}>
            <CampaignIcon sx={{ fontSize: 15, color: 'text.secondary' }} />
            <Typography variant="caption" sx={{ fontSize: 12.5, color: 'text.secondary' }}>
              Promosikan Iklan Anda
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
