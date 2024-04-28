import { useState, PropsWithChildren } from 'react';
import Stack from '@mui/material/Stack';
import Sidebar from "layouts/main-layout/sidebar";
import Topbar from "layouts/main-layout/topbar";
import Footer from "layouts/main-layout/footer";

const MainLayout = ({children}: PropsWithChildren) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    return (
        <Stack mx="auto" px={2.5} py={3.75} spacing={2.5} sx={{width: 1, maxWidth: 1920, minHeight: '100vh'}}>
            <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} setIsClosing={setIsClosing}/>
            <Stack component="main" direction="column" spacing={2.5} sx={{width: 1}}>
                <Topbar isClosing={isClosing} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}/>
                {children}
                <Footer/>
            </Stack>
        </Stack>
    );
}

export default MainLayout;