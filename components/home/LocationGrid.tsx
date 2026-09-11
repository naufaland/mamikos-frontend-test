import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Image from 'next/image';
import { LocationCard } from '@/components/ui/LocationCard';
import { CityLocation, CampusLocation } from '@/types';

interface LocationGridCityProps {
  variant: 'city';
  title: string;
  data: CityLocation[];
}

interface LocationGridCampusProps {
  variant: 'campus';
  title: string;
  data: CampusLocation[];
}

type LocationGridProps = LocationGridCityProps | LocationGridCampusProps;
  
export function LocationGrid(props: LocationGridProps) {
  const { variant, title } = props;

  return (
    <Box sx={{ py: 3, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
          {title}
        </Typography>

        {variant === 'city' && (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' },
              gap: 3,
            }}
          >
            {props.data.map((city) => (
              <LocationCard key={city.id} name={city.name} image={city.image} />
            ))}
            <Box
              sx={{
                aspectRatio: '4/3',
                border: '1px solid',
                borderColor: 'grey.200',
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 0.5,
                cursor: 'pointer',
                '&:hover': { bgcolor: 'grey.50' },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  color: 'text.primary',
                  display: 'flex',
                  fontSize: 20,
                  alignItems: 'center',
                  gap: 0.5,
                }}
              >
                Lihat Semua
                <ArrowForwardRoundedIcon sx={{ fontSize: 20 }} />
              </Typography>
            </Box>
          </Box>
        )}

        {variant === 'campus' && (
          <>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
                gap: {xs: 2, md: 3},
              }}
            >
              {props.data.map((campus) => (
                <Box
                  key={campus.id}
                  sx={{
                    border: '1px solid',
                    borderColor: 'grey.200',
                    borderRadius: 2,
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    cursor: 'pointer',
                    '&:hover': { bgcolor: 'grey.50' },
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      position: 'relative',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      flexShrink: 0,
                      border: '2px solid',
                      borderColor: 'grey.200',
                      bgcolor: 'grey.100',
                    }}
                  >
                    <Image
                      src={campus.logo}
                      alt={campus.name}
                      fill
                      style={{ objectFit: 'contain', padding: '2px' }}
                    />
                  </Box>
                  <Stack spacing={0} >
                    <Typography sx={{ fontWeight: 700, fontSize: 16, color: "#000" }} >
                      {campus.name}
                    </Typography>
                    <Typography sx={{ fontSize: 12, color: "text.secondary" }} >
                      {campus.city}
                    </Typography>
                  </Stack>
                </Box>
              ))}
              <Box 
              sx={{
                    border: '1px solid',
                    borderColor: 'grey.200',
                    borderRadius: 2,
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 2,
                    cursor: 'pointer',
                    height: '100%',
                    '&:hover': { bgcolor: 'grey.50' }
                  }}>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        display: 'flex',
                        fontSize: 16,
                        alignItems: 'center',
                        gap: 0.5,
                      }}
                    >
                      Lihat Semua
                      <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
                    </Typography>
            </Box>
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
}
