import { Box, useTheme } from "@mui/material";
import Sidebar from "components/Sidebar";
import Topbar from "components/Topbar";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode
}

const MainLayout = ({children}: LayoutProps) => {
    const theme = useTheme();

    return (
        <Box sx={{margin: '0 auto', padding: '30px 20px', display: 'flex', gap: '20px', width: '100%', maxWidth: '1920px', height: 'auto', minHeight: '100vh', backgroundColor: theme.palette.action.hover}}>
            <Sidebar/>
            <Box sx={{width: 'calc(100%-265px)'}}>
                <Topbar/>
                {children}
            </Box>
        </Box>
    );
}

export default MainLayout;