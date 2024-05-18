import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Image from 'components/base/Image';
import IconifyIcon from 'components/base/IconifyIcon';
import LogoImg from 'assets/images/logo.svg';

const SidebarHeader = () => {
  return (
    <Box px={3.5} py={4}>
      <Stack alignItems="center" justifyContent="flex-start">
        <ButtonBase component={Link} href="/" sx={{ py: 1.2 }} disableRipple>
          <Image src={LogoImg} alt="logo" sx={{ mr: 1, height: 24, width: 24 }} />
          <Typography variant="h5" color="text.primary" sx={{ letterSpacing: 1 }}>
            Dashdark X
          </Typography>
        </ButtonBase>
      </Stack>

      <TextField
        variant="filled"
        placeholder="Search for..."
        sx={{ mt: 4, width: 1 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconifyIcon icon={'mingcute:search-line'} />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SidebarHeader;
