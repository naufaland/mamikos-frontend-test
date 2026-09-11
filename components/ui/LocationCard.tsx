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
      {/* Gradient overlay — full card, darker at bottom */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.25)',
        }}
      />
      {/* Name — benar-benar di center bawah card */}
      <Typography
        sx={{
          fontWeight: 600,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: 20,
          whiteSpace: 'nowrap',
          textShadow: '0 2px 8px rgba(0,0,0,0.6)',
        }}
      >
        {name}
      </Typography>
    </Box>
  );
}
