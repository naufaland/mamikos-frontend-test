import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

export function SearchBar() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: 400,
        height: 48,
        p: 0.5,
        bgcolor: 'white',
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'grey.300',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        boxSizing: 'border-box',
      }}
    >
      <SearchIcon
        sx={{
          color: 'grey.500',
          ml: 1,
          flexShrink: 0,
        }}
      />

      <InputBase
        placeholder="Masukan nama lokasi/area/alamat"
        sx={{
          flex: 1,
          px: 1.5,
          fontSize: 14,
        }}
      />

      <Button
        variant="contained"
        disableElevation
        sx={{
          height: '100%',
          minWidth: 72,
          borderRadius: 1.5,
          px: 2,
          fontSize: 14,
          fontWeight: 600,
          flexShrink: 0,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      >
        Cari
      </Button>
    </Box>
  );
}