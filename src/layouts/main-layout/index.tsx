import { useState, PropsWithChildren } from 'react';
import Stack from '@mui/material/Stack';
import Sidebar from 'layouts/main-layout/sidebar';
import Topbar from 'layouts/main-layout/topbar';

const MainLayout = ({ children }: PropsWithChildren) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  return (
    <Stack sx={{ width: 1, minHeight: '100vh' }}>
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} setIsClosing={setIsClosing} />
      <Stack
        component="main"
        direction="column"
        spacing={2.5}
        sx={{ flexGrow: 1, p: 5, width: { xs: 1, sm: `calc(100% - 300px)` } }}
      >
        <Topbar isClosing={isClosing} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        {children}
      </Stack>
    </Stack>
  );
};

export default MainLayout;
