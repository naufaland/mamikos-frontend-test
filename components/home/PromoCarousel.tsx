'use client';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Image from 'next/image';
import Link from 'next/link';
import { promoBanners } from '@/data/mock-data';

export function PromoCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      dragFree: false,
      duration: 30,
      containScroll: false,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <Box sx={{ py: 3, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Box
          ref={emblaRef}
          sx={{
            overflow: 'hidden',
            mx: { xs: -1, md: -2 },
            px: { xs: 1, md: 2 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              touchAction: 'pan-y',
            }}
          >
            {promoBanners.map((banner, index) => {
              const isActive = index === selectedIndex;

              return (
                <Box
                  key={banner.id}
                  sx={{
                    flex: '0 0 590px',
                    width: 590,
                    paddingLeft: '16px',
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      borderRadius: 2,
                      overflow: 'hidden',
                      width: '100%',
                      height: 250,
                      transform: isActive ? 'scale(1)' : 'scale(0.9)',
                      transformOrigin: 'center center',
                      transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                      boxShadow: isActive
                        ? '0 8px 24px rgba(0,0,0,0.18)'
                        : '0 2px 8px rgba(0,0,0,0.08)',
                    }}
                  >
                    {banner.link ? (
                      <Link
                        href={banner.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'block', height: '100%' }}
                      >
                        <Image
                          src={banner.image}
                          alt={banner.alt}
                          fill
                          style={{ objectFit: 'cover' }}
                          sizes="(max-width: 600px) 80vw, (max-width: 900px) 55vw, 40vw"
                        />
                      </Link>
                    ) : (
                      <Image
                        src={banner.image}
                        alt={banner.alt}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 600px) 80vw, (max-width: 900px) 55vw, 40vw"
                      />
                    )}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* Dot indicators */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mt: 1.5 }}>
          {promoBanners.map((_, index) => (
            <Box
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              sx={{
                width: index === selectedIndex ? 20 : 8,
                height: 8,
                borderRadius: 4,
                bgcolor: index === selectedIndex ? 'primary.main' : 'grey.300',
                cursor: 'pointer',
                transition: 'width 0.3s ease, background-color 0.3s ease',
              }}
            />
          ))}
        </Box>

        {/* Controls */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            mt: 1.5,
          }}
        >
          <IconButton
            onClick={scrollPrev}
            size="small"
            sx={{ border: '1px solid', borderColor: 'grey.300' }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <Button
            variant="text"
            sx={{ fontSize: 13, fontWeight: 600, color: 'text.primary' }}
          >
            Lihat semua promo
          </Button>
          <IconButton
            onClick={scrollNext}
            size="small"
            sx={{ border: '1px solid', borderColor: 'grey.300' }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}