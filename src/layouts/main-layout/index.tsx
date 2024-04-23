import { useState, ReactNode } from 'react';
import Box from "@mui/material/Box";
import Sidebar from "layouts/sidebar";
import Topbar from "layouts/topbar";
import Footer from "layouts/footer";

interface LayoutProps {
    children: ReactNode
}

const MainLayout = ({children}: LayoutProps) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    return (
        <Box sx={(theme) => ({mx: 'auto', px: theme.spacing(2.5), py: theme.spacing(3.75), display: 'flex', gap: theme.spacing(2.5), width: '100%', maxWidth: 1920, height: 'auto', minHeight: '100vh'})}>
            <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} setIsClosing={setIsClosing}/>
            <Box component="main" sx={(theme) => ({display: 'flex', flexDirection: 'column', gap: theme.spacing(2.5), width: '100%'})}>
                <Topbar isClosing={isClosing} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}/>
                {children}
                <Footer/>
            </Box>
        </Box>
    );
}

export default MainLayout;