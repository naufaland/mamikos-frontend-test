'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const features = [
  {
    id: 'feature-1',
    title: 'Survei Kos Online',
    content:
      'Cari, pilih, dan survei kos idaman secara online tanpa perlu keluar rumah. Semua bisa dilakukan dari genggaman tangan kamu.',
  },
  {
    id: 'feature-2',
    title: 'Booking dan Pembayaran Mudah',
    content:
      'Proses booking yang mudah dan cepat. Bayar sewa kos langsung melalui aplikasi dengan berbagai metode pembayaran.',
  },
  {
    id: 'feature-3',
    title: 'Kos Terverifikasi',
    content:
      'Setiap kos di Mamikos telah melalui proses verifikasi langsung oleh tim Mamikos untuk menjamin kenyamanan penyewa.',
  },
  {
    id: 'feature-4',
    title: 'Filter dan Pencarian Canggih',
    content:
      'Temukan kos yang sesuai kebutuhan dengan fitur filter berdasarkan harga, fasilitas, lokasi, dan jenis kos.',
  },
];

export function SeoDescription() {
  const [expanded, setExpanded] = useState<string | false>(false);

  return (
    <Box sx={{ py: 5, bgcolor: 'grey.50', borderTop: '1px solid', borderColor: 'grey.200' }}>
      <Container maxWidth="lg">
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
          Cari Kos di Mamikos — Mudah, Aman, dan Terpercaya
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: 720, lineHeight: 1.8 }}>
          Mamikos adalah platform pencarian kos terbesar di Indonesia dengan lebih dari 100.000 kos
          tersebar di seluruh Indonesia. Mulai dari kos putra, putri, hingga kos campur, semua bisa
          kamu temukan di sini. Proses sewa pun mudah — cukup cari, pilih, survei, dan bayar melalui
          aplikasi Mamikos.
        </Typography>

        <Typography variant="body2" sx={{ fontWeight: 700, mb: 1.5 }}>
          Fitur yang dapat dimanfaatkan:
        </Typography>

        {features.map((feature) => (
          <Accordion
            key={feature.id}
            expanded={expanded === feature.id}
            onChange={(_, isExpanded) => setExpanded(isExpanded ? feature.id : false)}
            disableGutters
            elevation={0}
            sx={{
              border: '1px solid',
              borderColor: 'grey.200',
              '&:before': { display: 'none' },
              mb: 1,
              borderRadius: '8px !important',
              overflow: 'hidden',
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {feature.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">
                {feature.content}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}
