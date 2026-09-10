import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

interface LocationCardProps {
  name: string;
  image: string;
}

export function LocationCard({ name, image }: LocationCardProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: 2,
        overflow: 'hidden',
        cursor: 'pointer',
        aspectRatio: '4/3',
        '&:hover img': { transform: 'scale(1.05)' },
      }}
    >
      <Image
        src={image}
        alt={name}
        fill
        style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
        sizes="(max-width: 600px) 50vw, 25vw"
      />
      {/* Gradient overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 60%)',
        }}
      />
      <Typography
        variant="body2"
        sx={{
          fontWeight: 700,
          position: 'absolute',
          bottom: 12,
          left: 12,
          color: 'white',
          fontSize: 15,
          textShadow: '0 1px 4px rgba(0,0,0,0.5)',
        }}
      >
        {name}
      </Typography>
    </Box>
  );
}
