import { useState, PropsWithChildren } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Sidebar from 'layouts/main-layout/sidebar';
import Topbar from 'layouts/main-layout/topbar';
import Footer from 'layouts/main-layout/footer';

const MainLayout = ({ children }: PropsWithChildren) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  return (
    <Box
      mx="auto"
      sx={{ display: 'flex', width: 1, minHeight: '100vh' }}
    >
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} setIsClosing={setIsClosing} />
      <Stack
        component="main"
        direction="column"
        spacing={2.5}
        sx={{ flexGrow: 1, p: 3, width: { xs: '100%', sm: `calc(100% - 300px)` } }}
      >
        <Topbar isClosing={isClosing} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        {children}
        <Footer />
      </Stack>
    </Box>
  );
};

export default MainLayout;
