import { Box, useTheme } from "@mui/material";
import { ReactNode } from "react";
import Sidebar from "layouts/sidebar";
import Topbar from "layouts/topbar";
import Footer from "layouts/footer";

interface LayoutProps {
    children: ReactNode
}

const MainLayout = ({children}: LayoutProps) => {
    const theme = useTheme();

    return (
        <Box sx={{width: '100%', backgroundColor: theme.palette.action.hover}}>
            <Box sx={{margin: '0 auto', padding: '1.875rem 1.25rem', display: 'flex', gap: '1.25rem', width: '100%', maxWidth: '1920px', height: 'auto', minHeight: '100vh'}}>
                <Sidebar/>
                <Box component="main" sx={{display: 'flex', flexDirection: 'column', gap: '1.25rem', width: '100%'}}>
                    <Topbar/>
                    {children}
                    <Footer/>
                </Box>
            </Box>
        </Box>
    );
}

export default MainLayout;