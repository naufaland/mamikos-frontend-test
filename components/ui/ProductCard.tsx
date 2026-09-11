'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import RedeemIcon from '@mui/icons-material/Redeem';
import Image from 'next/image';
import Link from 'next/link';
import { Kos } from '@/types';

interface ProductCardProps {
  kos: Kos;
  /** 'ngebut' | 'promo' | 'rekomendasi' — menentukan gambar dummy yang dipakai */
  sectionType?: 'ngebut' | 'promo' | 'rekomendasi';
}

function formatRupiah(amount: number): string {
  return `Rp${amount.toLocaleString('id-ID')}`;
}

/** Pilih foto dummy berdasarkan section & apakah ada diskon/promo */
function getImageSrc(kos: Kos, sectionType: ProductCardProps['sectionType']): string {
  // Gambar 1 (kWZTYlOQ): card dengan diskon nominal → Promo Ngebut & Rekomendasi yang ada diskon
  // Gambar 2 (ktwHC7Pq): Kos yang Lagi Promo (promoLabel)
  // Gambar 3 (ygpUGYZ7): Rekomendasi Kos yang tidak ada promo sama sekali
  if (sectionType === 'promo') {
    return '/roomKos/ktwHC7Pq-540x720.jpg';
  }
  if (kos.discountAmount) {
    return '/roomKos/kWZTYlOQ-540x720.jpg';
  }
  return '/roomKos/ygpUGYZ7-540x720.jpg';
}

export function ProductCard({ kos, sectionType = 'rekomendasi' }: ProductCardProps) {
  const imageSrc = getImageSrc(kos, sectionType);
  const CARD_WIDTH = 266;
  const PHOTO_HEIGHT = 168;
  const BORDER_RADIUS = '10px';

  const cardContent = (
    <Box
      sx={{
        width: CARD_WIDTH,
        minWidth: CARD_WIDTH,
        maxWidth: CARD_WIDTH,
        borderRadius: BORDER_RADIUS,
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'grey.200',
        bgcolor: 'white',
        cursor: kos.detailUrl ? 'pointer' : 'default',
        transition: 'box-shadow 0.2s, transform 0.2s',
        '&:hover': kos.detailUrl
          ? { boxShadow: '0 4px 20px rgba(0,0,0,0.13)', transform: 'translateY(-2px)' }
          : {},
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
      }}
    >
      {/* Image — 252x168, centred inside the 266px card with 7px side margin */}
      <Box sx={{ px: '7px', pt: '7px' }}>
      <Box
        sx={{
          position: 'relative',
          width: 252,
          height: PHOTO_HEIGHT,
          borderRadius: BORDER_RADIUS,
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        <Image
          src={imageSrc}
          alt={kos.name}
          fill
          style={{ objectFit: 'cover' }}
          sizes="266px"
        />
      </Box>
      </Box>

      {/* Card Body */}
      <Box sx={{ px: 1.5, pb: 1.5, pt: 1, flex: 1, display: 'flex', flexDirection: 'column', gap: 0.25 }}>
        {/* Category + Rating + Sisa kamar — di bawah foto */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexWrap: 'wrap', mb: 0.5 }}>
          {/* Chip kategori — outlined, border abu */}
          <Chip
            label={kos.category}
            size="small"
            variant="outlined"
            sx={{
              bgcolor: 'white',
              fontSize: 11,
              fontWeight: 500,
              height: 22,
              px: 0.25,
              borderRadius: '6px',
              borderColor: 'grey.400',
              color: 'text.primary',
            }}
          />
          {kos.rating && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25 }}>
              <StarRoundedIcon sx={{ fontSize: 13, color: '#F5A623' }} />
              <Typography sx={{ fontSize: 11, fontWeight: 600, color: '#222' }}>{kos.rating.toFixed(1)}</Typography>
            </Box>
          )}
          {kos.remainingRooms && (
            <Typography
              sx={{
                fontSize: 11,
                color: '#E74C3C',
                fontStyle: 'italic',
                fontWeight: 400,
              }}
            >
              {kos.remainingRooms}
            </Typography>
          )}
        </Box>

        {/* Name — regular weight */}
        <Typography
          sx={{
            fontSize: 13,
            fontWeight: 400,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 1,
            lineHeight: 1.4,
            color: 'text.primary',
          }}
        >
          {kos.name}
        </Typography>

        {/* Location — bold, dark */}
        <Typography sx={{ fontSize: 13, color: 'text.primary', fontWeight: 700, lineHeight: 1.3 }}>
          {kos.location}
        </Typography>

        {/* Facilities */}
        <Typography
          sx={{
            fontSize: 11,
            color: 'text.secondary',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            display: 'block',
            mt: 0.25,
          }}
        >
          {kos.facilities.join(' · ')}
        </Typography>

        {/* Price Section */}
        <Box sx={{ mt: 'auto', pt: 1 }}>
          {/* Variant 1: ada diskon nominal (Promo Ngebut) */}
          {kos.discountAmount && kos.originalPrice ? (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexWrap: 'wrap' }}>
                <BoltOutlinedIcon sx={{ fontSize: 13, color: '#E74C3C' }} />
                <Typography sx={{ fontSize: 11, color: '#E74C3C', fontWeight: 600 }}>
                  Diskon {formatRupiah(kos.discountAmount)}
                </Typography>
                <Typography sx={{ fontSize: 11, textDecoration: 'line-through', color: '#999' }}>
                  {formatRupiah(kos.originalPrice)}
                </Typography>
              </Box>
              <Typography sx={{ fontSize: 14, fontWeight: 700, color: '#222', mt: 0.25 }}>
                {formatRupiah(kos.finalPrice)}{' '}
                <Typography component="span" sx={{ fontSize: 12, color: '#555', fontWeight: 400 }}>
                  {kos.priceLabel}
                </Typography>
              </Typography>
            </>
          ) : kos.promoLabel ? (
            /* Variant 2: ada promoLabel (Kos Lagi Promo) */
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <RedeemIcon sx={{ fontSize: 13, color: 'primary.main' }} />
                <Typography sx={{ fontSize: 11, color: 'primary.main', fontWeight: 600 }}>
                  {kos.promoLabel}
                </Typography>
              </Box>
              <Typography sx={{ fontSize: 14, fontWeight: 700, color: '#222', mt: 0.25 }}>
                {formatRupiah(kos.finalPrice)}
                <Typography component="span" sx={{ fontSize: 12, color: '#555', fontWeight: 400 }}>
                  {kos.priceLabel}
                </Typography>
              </Typography>
            </>
          ) : (
            /* Variant 3: plain price (Rekomendasi tanpa promo) */
            <Typography sx={{ fontSize: 14, fontWeight: 700, color: '#222' }}>
              {formatRupiah(kos.finalPrice)}
              <Typography component="span" sx={{ fontSize: 12, color: '#555', fontWeight: 400 }}>
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
      <Link
        href={kos.detailUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', display: 'block', flexShrink: 0 }}
      >
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
