import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
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
              gap: 1.5,
            }}
          >
            {props.data.map((city) => (
              <LocationCard key={city.id} name={city.name} image={city.image} />
            ))}
            {/* "Lihat semua" tile */}
            <Box
              sx={{
                aspectRatio: '4/3',
                border: '1px solid',
                borderColor: 'grey.200',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                '&:hover': { bgcolor: 'grey.50' },
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 600 }} color="text.secondary">
                Lihat semua →
              </Typography>
            </Box>
          </Box>
        )}

        {variant === 'campus' && (
          <>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(3, 1fr)', sm: 'repeat(4, 1fr)', md: 'repeat(7, 1fr)' },
                gap: 2,
              }}
            >
              {props.data.map((campus) => (
                <Box
                  key={campus.id}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1,
                    cursor: 'pointer',
                    '&:hover img': { filter: 'brightness(0.9)' },
                  }}
                >
                  <Box
                    sx={{
                      width: 72,
                      height: 72,
                      position: 'relative',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '2px solid',
                      borderColor: 'grey.200',
                      bgcolor: 'grey.100',
                    }}
                  >
                    <Image
                      src={campus.logo}
                      alt={campus.name}
                      fill
                      style={{ objectFit: 'contain', padding: '8px' }}
                    />
                  </Box>
                  <Stack spacing={0} sx={{ alignItems: 'center' }}>
                    <Typography variant="caption" sx={{ fontWeight: 700 }} align="center">
                      {campus.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" align="center">
                      {campus.city}
                    </Typography>
                  </Stack>
                </Box>
              ))}
            </Box>
            <Button
              variant="text"
              sx={{ mt: 2, fontSize: 13, fontWeight: 600, color: 'text.secondary' }}
            >
              Lihat semua kampus →
            </Button>
          </>
        )}
      </Container>
    </Box>
  );
}
