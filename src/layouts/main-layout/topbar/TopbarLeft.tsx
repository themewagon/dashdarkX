import { fontFamily } from 'theme/typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import ButtonBase from '@mui/material/ButtonBase';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';
import Image from 'components/base/Image';
import LogoImg from 'assets/images/Logo.png';

interface TopbarLeftProps {
  isClosing: boolean;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopbarLeft = ({ isClosing, mobileOpen, setMobileOpen }: TopbarLeftProps) => {
  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <Stack spacing={2} alignItems="center">
      {/* sidbar toggle btn */}
      <Toolbar sx={{ display: { xm: 'block', lg: 'none' } }}>
        <IconButton
          size="medium"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
        >
          <IconifyIcon icon={'mingcute:menu-line'} />
        </IconButton>
      </Toolbar>

      {/* logo */}
      <ButtonBase
        component={Link}
        href="/"
        disableRipple
        sx={{ display: { xm: 'block', lg: 'none' } }}
      >
        <Image src={LogoImg} alt="logo" sx={{ height: 24, width: 24 }} />
      </ButtonBase>

      {/* title */}
      <Typography
        variant="h5"
        sx={(theme) => ({
          letterSpacing: 1,
          fontFamily: fontFamily.workSans,
          fontWeight: theme.typography.caption.fontWeight,
          display: { xs: 'none', lg: 'block' },
        })}
      >
        Analytics
      </Typography>
    </Stack>
  );
};

export default TopbarLeft;
