import { Box, useTheme } from "@mui/material";
import Sidebar from "sections/Sidebar";
import Topbar from "sections/Topbar";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode
}

const MainLayout = ({children}: LayoutProps) => {
    const theme = useTheme();

    return (
        <Box sx={{width: '100%', height: 'auto', backgroundColor: theme.palette.action.hover}}>
            <Box sx={{margin: '0 auto', padding: '30px 20px', display: 'flex', gap: '20px', width: '100%', maxWidth: '1920px', height: 'auto', minHeight: '100vh'}}>
                <Sidebar/>
                <Box sx={{width: '100%'}}>
                    <Topbar/>
                    {children}
                </Box>
            </Box>
        </Box>
    );
}

export default MainLayout;