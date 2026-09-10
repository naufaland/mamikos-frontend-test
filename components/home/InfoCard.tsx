import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Image from 'next/image';

interface InfoCardProps {
  variant: 'survey' | 'managed';
  title: string;
  description: string;
  linkText?: string;
}

export function InfoCard({ variant, title, description, linkText }: InfoCardProps) {
  if (variant === "survey") { 
    return (
      <Box sx={{ py: 1, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Box
            sx={{
            position: 'relative',
            width: '100%',
            maxWidth: 796,
            height: {xs: 'auto', md: 176},
            border: '1px solid',
            borderColor: 'grey.200',
            borderRadius: 2,
            overflow: 'hidden',
            backgroundImage: 'url(/pics/bg_booking_status_right.png)',
            backgroundPosition: 'bottom right',
            backgroundSize: '200px',
            backgroundRepeat: 'no-repeat',
            p: "24px",
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Stack spacing={1} sx={{ maxWidth: '65%' }}>
            <Typography sx={{ fontWeight: 700, fontSize: '20px', lineHeight: 1.3 }}>
              {title}
            </Typography>
            <Typography sx={{ fontSize: '16px', color: 'text.secondary' }}>
              {description}
            </Typography>
            {linkText && (
              <Link
                href="#"
                underline="hover"
                sx={{ color: 'primary.main', fontSize: '12px', fontWeight: 600, mt: 0.5 }}
              >
                {linkText}
              </Link>
            )}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

    return (
          <Box sx={{ py: 1, bgcolor: 'white' }}>
            <Container maxWidth="lg">
              <Box
                sx={{
                position: 'relative',
                width: '100%',
                maxWidth: 1138,
                height: {xs: 'auto', md: 108},
                border: '1px solid',
                borderColor: 'grey.200',
                borderRadius: 2,
                overflow: 'hidden',
                p: "24px",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center', 
                gap: 3,
              }}
            >
              <Stack spacing={0.5} sx={{ flex: 1 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '20px' }}>
                  {title}
                </Typography>
                <Typography sx={{ fontSize: '16px', color: 'text.secondary' }}>
                  {description}
                </Typography>
              </Stack>

              <Stack direction="row" spacing={3} alignItems="center" sx={{ flexShrink: 0 }}>
                <Image
                  src="/logo/ic_singgahsini_full.svg"
                  alt="Singgahsini"
                  width={157.5}
                  height={40}
                  style={{ height: 40, width: 'auto' }}
                />
                <Image
                  src="/logo/ic_apik_full.svg"
                  alt="Apik"
                  width={115}
                  height={40}
                  style={{ height: 40, width: 'auto' }}
                />
              </Stack>
            </Box>
          </Container>
        </Box>
      );
    }
