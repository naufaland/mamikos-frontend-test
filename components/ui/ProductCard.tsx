import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';
import Link from 'next/link';
import { Kos } from '@/types';

interface ProductCardProps {
  kos: Kos;
}

function formatRupiah(amount: number): string {
  return `Rp${amount.toLocaleString('id-ID')}`;
}

export function ProductCard({ kos }: ProductCardProps) {
  const cardContent = (
    <Box
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'grey.200',
        bgcolor: 'white',
        cursor: kos.detailUrl ? 'pointer' : 'default',
        transition: 'box-shadow 0.2s, transform 0.2s',
        '&:hover': kos.detailUrl
          ? { boxShadow: '0 4px 16px rgba(0,0,0,0.12)', transform: 'translateY(-2px)' }
          : {},
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Image */}
      <Box sx={{ position: 'relative', width: '100%', pt: '75%' /* 4:3 */ }}>
        <Image
          src={kos.image}
          alt={kos.name}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
        />
        {/* Category + Rating row on image bottom */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 8,
            left: 8,
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
          }}
        >
          <Chip
            label={kos.category}
            size="small"
            sx={{
              bgcolor: 'white',
              fontSize: 11,
              fontWeight: 600,
              height: 22,
              px: 0.5,
            }}
          />
          {kos.rating && (
            <Chip
              icon={<StarIcon sx={{ fontSize: 12, color: '#F5A623 !important' }} />}
              label={kos.rating.toFixed(1)}
              size="small"
              sx={{ bgcolor: 'white', fontSize: 11, height: 22, px: 0.5 }}
            />
          )}
          {kos.remainingRooms && (
            <Typography
              variant="caption"
              sx={{ color: '#E74C3C', fontWeight: 600, bgcolor: 'white', px: 0.75, py: 0.25, borderRadius: 1 }}
            >
              {kos.remainingRooms}
            </Typography>
          )}
        </Box>
      </Box>

      {/* Card Body */}
      <Box sx={{ p: 1.5, flex: 1, display: 'flex', flexDirection: 'column', gap: 0.25 }}>
        {/* Name */}
        <Typography
          variant="body2"
          sx={{
            fontWeight: 700,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            lineHeight: 1.3,
          }}
        >
          {kos.name}
        </Typography>

        {/* Location */}
        <Typography variant="caption" color="text.secondary">
          {kos.location}
        </Typography>

        {/* Facilities */}
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            display: 'block',
          }}
        >
          {kos.facilities.join(' · ')}
        </Typography>

        {/* Price Section */}
        <Box sx={{ mt: 'auto', pt: 1 }}>
          {/* Variant 1: has discountAmount */}
          {kos.discountAmount && kos.originalPrice ? (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Typography variant="caption" sx={{ color: '#E74C3C', fontWeight: 600 }}>
                  ⚡ Diskon {formatRupiah(kos.discountAmount)}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ textDecoration: 'line-through', color: 'text.secondary' }}
                >
                  {formatRupiah(kos.originalPrice)}
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ fontWeight: 700 }}>
                {formatRupiah(kos.finalPrice)}{' '}
                <Typography component="span" variant="caption" color="text.secondary">
                  {kos.priceLabel}
                </Typography>
              </Typography>
            </>
          ) : kos.promoLabel ? (
            /* Variant 2: has promoLabel */
            <>
              <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 600 }}>
                🎁 {kos.promoLabel}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 700 }}>
                {formatRupiah(kos.finalPrice)}
                <Typography component="span" variant="caption" color="text.secondary">
                  {kos.priceLabel}
                </Typography>
              </Typography>
            </>
          ) : (
            /* Variant 3: plain price */
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              {formatRupiah(kos.finalPrice)}
              <Typography component="span" variant="caption" color="text.secondary">
                {kos.priceLabel}
              </Typography>
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );

  if (kos.detailUrl) {
    return (
      <Link href={kos.detailUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
