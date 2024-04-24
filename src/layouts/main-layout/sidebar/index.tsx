import Drawer from "@mui/material/Drawer";
import DrawerItems from "./DrawerItems";

interface SidebarProps {
    mobileOpen: boolean;
    setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsClosing: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ mobileOpen, setMobileOpen, setIsClosing}: SidebarProps) => {
    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    return (
        <>
            <Drawer variant="temporary" open={mobileOpen} onTransitionEnd={handleDrawerTransitionEnd} onClose={handleDrawerClose} ModalProps={{keepMounted: true}} sx={{display: {xs: 'block', lg: 'none'}}}>
                <DrawerItems/>
            </Drawer>

            <Drawer variant="permanent" sx={{display: {lg: 'block', xs: 'none'}}} open>
                <DrawerItems/>
            </Drawer>
        </>
    );
}

export default Sidebar;