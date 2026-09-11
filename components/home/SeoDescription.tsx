'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const FEATURES = [
  {
    label: 'a',
    title: 'Fitur Pencarian',
    content:
      'Di kolom pencarian, kamu bisa cari kos di sekitarmu atau kos di seluruh daerah di Indonesia dengan memasukkan keyword, seperti kos dekat Kampus/Universitas di masing-masing kota, cari kos di Jogja, Depok, Jakarta, Surabaya, Bandung, dan kota besar lainnya atau cari kos di sekitar lokasi saya saat ini.',
  },
  {
    label: 'b',
    title: 'Filter Pencarian',
    content:
      'Cari kos berdasarkan fasilitas kos yang kamu mau, lebih mudah dengan filter berdasarkan Kos AC, Kos Kamar mandi dalam, Kos Wifi. Bisa juga pilih kos dengan tipe kos, mulai dari Kos Harian, Kos Bulanan hingga Kos Tahunan. Mau cari Kos Bebas, Kos Pasutri, Kos Putra, Kos Putri, Kos Campur juga bisa.',
  },
  {
    label: 'c',
    title: 'Chat dengan Penyewa',
    content:
      'Terhubung langsung dengan pemilik kos dan bisa bertanya lebih lanjut mengenai info kos melalui fitur chat di Mamikos.',
  },
  {
    label: 'd',
    title: 'Sewa Langsung via Mamikos',
    content:
      'Bisa langsung mengajukan sewa kos di aplikasi atau website Mamikos. Bahkan, kamu bisa mulai sewa kos dari 3 bulan sebelum masuk kosan. Transaksi lebih aman, tanpa takut kamarnya penuh keduluan orang lain.',
  },
  {
    label: 'e',
    title: 'Virtual Tour',
    content:
      'Virtual Tour Mamikos adalah media foto lingkungan kos dalam 360° yang diperuntukkan untuk kamu, para pencari kos, agar dapat mengetahui kondisi lingkungan kos secara detail tanpa harus survei langsung. Fitur ini cocok jadi andalanmu yang butuh kosan tapi tidak punya waktu untuk survei langsung, karena fitur ini menampilkan keadaan kos secara lengkap dari berbagai sudut.',
  },
  {
    label: 'f',
    title: 'Pembayaran via Mamikos',
    content:
      'Bayar kosan anti ribet, cashless, dan jaminan aman, dengan beragam pilihan metode pembayaran. Nikmati promo-promo menarik yang diselenggarakan secara berkala untuk membantu kamu ngekos lebih hemat.',
  },
  {
    label: 'g',
    title: 'MamiPoin',
    content:
      'Sebagai wujud terima kasih, Mamikos menghadirkan program loyalti melalui MamiPoin. Anak kos bisa mendapatkan poin sebagai cashback setiap melakukan pembayaran kos dan dapat dikumpulkan untuk digunakan sebagai tambahan diskon di pembayaran kos selanjutnya. Pemilik kos juga akan mendapatkan MamiPoin setiap melakukan aktivitas di Mamikos dan dapat dikumpulkan untuk ditukar menjadi beragam hadiah menarik atau tambahan diskon di pembayaran paket Mamikos GoldPlus.',
  },
  {
    label: 'h',
    title: 'Kos Review',
    content:
      'Lihat review dari para penghuni kos agar kamu semakin yakin untuk sewa kos. Kamu juga bisa tulis pengalaman kamu selama ngekos untuk menambah info kos tersebut.',
  },
  {
    label: 'i',
    title: 'Favorit',
    content:
      'Ketemu dengan kos idaman, bisa disimpan dulu melalui fitur favorit kos. Kos yang sudah kamu simpan, dapat kamu sewa di kemudian hari.',
  },
];

export function SeoDescription() {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ bgcolor: '#f4f4f4', borderTop: '1px solid', borderColor: 'grey.200', pb: 5 }}>
      <Container >
        {/* Title — center */}
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, textAlign: 'center', mb: 2.5, pt: 3 }}
        >
          Mamikos - Aplikasi Anak Kos No. 1 di Indonesia
        </Typography>

        {/* Paragraf deskripsi */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ lineHeight: 1.7, mb: 3, textAlign: 'justify' }}
        >
          Mamikos memanfaatkan teknologi untuk berkembang dari aplikasi cari kos menjadi aplikasi yang
          memudahkan calon anak kos untuk booking properti kos dan juga melakukan pembayaran kos. Saat
          ini kami memiliki lebih dari 2 juta kamar kos yang tersebar di lebih dari 140 kota di seluruh
          Indonesia. Mamikos juga menyediakan layanan manajemen properti, bernama Singgahsini dan Apik,
          untuk menjawab kebutuhan calon penghuni yang menginginkan kos eksklusif atau kos murah. Mamikos
          berusaha untuk bisa terus menyajikan daftar rumah kos dengan data ketersediaan kamar yang
          akurat, fasilitas kos terperinci, dilengkapi dengan foto serta detail harga kos, dan kemudahan
          survei via fitur virtual tour agar calon penghuni mendapatkan kenyamanan dalam proses pencarian
          dan booking kos.
        </Typography>

        {/* Toggle header — satu accordion tunggal */}
        <Box
          onClick={() => setOpen((v) => !v)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0.75,
            cursor: 'pointer',
            userSelect: 'none',
            mb: open ? 3 : 0,
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: 15 }}>
            Fitur yang dapat dimanfaatkan di Mamikos
          </Typography>
          {open ? (
            <KeyboardArrowUpIcon sx={{ fontSize: 20 }} />
          ) : (
            <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
          )}
        </Box>

        {/* Feature list — muncul saat dibuka */}
        {open && (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            {FEATURES.map((f) => (
              <Box key={f.label} sx={{ display: 'flex', gap: 2 }}>
                {/* Label huruf */}
                <Typography
                  sx={{ fontWeight: 600, fontSize: 14, minWidth: 20, color: 'text.primary', pt: 0.1 }}
                >
                  {f.label}.
                </Typography>

                {/* Konten */}
                <Box>
                  <Typography sx={{ fontWeight: 550, fontSize: 14, mb: 0.5 }}>
                    {f.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {f.content}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}
