import { Box, Drawer, Toolbar, IconButton } from "@mui/material";
import { Icon } from '@iconify/react';
import { useState } from "react";
import DrawerItems from "./DrawerItems";

const Sidebar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
          setMobileOpen(!mobileOpen);
        }
    };

    return (
        <>
            <Toolbar sx={{position: 'fixed', top: 0, left: 0}}>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' }}}>
                    <Icon icon={`ion:menu`}/>
                </IconButton>
            </Toolbar>
            
            <Box component="nav" sx={{ width: { sm: '265px' }, flexShrink: { sm: 0 } }} aria-label="sidebar content">
                <Drawer variant="temporary" open={mobileOpen} onTransitionEnd={handleDrawerTransitionEnd} onClose={handleDrawerClose} ModalProps={{keepMounted: true}} sx={{display: {xs: 'block', sm: 'none'}}}>
                    <DrawerItems/>
                </Drawer>

                <Drawer variant="permanent" sx={{display: { xs: 'none', sm: 'block' }, '& .MuiDrawer-paper': {position: 'sticky'}}} open>
                    <DrawerItems/>
                </Drawer>
            </Box>
        </>
    );
}

export default Sidebar;