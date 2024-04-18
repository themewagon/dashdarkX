import { Box, useTheme } from "@mui/material";
import { ReactNode } from "react";
import Sidebar from "sections/Sidebar";
import Topbar from "sections/Topbar";

interface LayoutProps {
    children: ReactNode
}

const MainLayout = ({children}: LayoutProps) => {
    const theme = useTheme();

    return (
        <Box sx={{width: '100%', backgroundColor: theme.palette.action.hover}}>
            <Box sx={{margin: '0 auto', padding: '1.875rem 1.25rem', display: 'flex', gap: '1.25rem', width: '100%', maxWidth: '1920px', height: 'auto', minHeight: '100vh'}}>
                <Sidebar/>
                <Box component="main" sx={{flexGrow: 1, width: '100%'}}>
                    <Topbar/>
                    {children}
                </Box>
            </Box>
        </Box>
    );
}

export default MainLayout;