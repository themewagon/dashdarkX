import TopbarLeft from './TopbarLeft';
import TopbarRight from './TopbarRight';
import Stack from '@mui/material/Stack';

interface TopbarProps {
  isClosing: boolean;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Topbar = ({ isClosing, mobileOpen, setMobileOpen }: TopbarProps) => {
  return (
    <Stack alignItems="center" justifyContent="space-between" mb={2}>
      <TopbarLeft isClosing={isClosing} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <TopbarRight />
    </Stack>
  );
};

export default Topbar;
