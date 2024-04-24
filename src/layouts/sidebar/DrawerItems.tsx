import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemButton";
import Link from "@mui/material/Link";
import SidebarLinks from "./SidebarLinks";

import LogoImg from "assets/images/logo.svg";
import LineImg from "assets/images/line.svg";
import DocImg from "assets/images/document.svg";

const topNavLinks = [
    {
        name: 'Dahsboard',
        path: '',
        icon: 'home'
    },
    {
        name: 'Tables',
        path: 'tables',
        icon: 'stats-chart'
    },
    {
        name: 'Billing',
        path: 'billing',
        icon: 'card'
    },
    {
        name: 'RTL',
        path: 'rtl',
        icon: 'build'
    },
];

const bottomNavLinks = [
    {
        name: 'Profile',
        path: '#!',
        icon: 'person'
    },
    {
        name: 'Sign In',
        path: '#!',
        icon: 'document'
    },
    {
        name: 'Sign Up',
        path: '#!',
        icon: 'rocket-sharp'
    },
];

const DrawerItems = () => {
    return (
        <>
        {/* logo */}
        <Link href='/'>
            <ListItemButton sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Box component="img" src={LogoImg} alt="logo" sx={(theme) => ({mr: theme.spacing(1), height: '1.5rem', width: '1.5rem'})}/>
                <Typography variant="h5" color="grey.800">argon</Typography>
            </ListItemButton>
        </Link>

        {/* divider */}
        <Box component="img" src={LineImg} alt="divider" sx={(theme) => ({mt: theme.spacing(1.2), width: '100%', height: '1px'})}/>
        
        {/* sidebar links */}
        <SidebarLinks title="" navLinks={topNavLinks}/>
        <SidebarLinks title="Account Pages" navLinks={bottomNavLinks}/>

        {/* sidebar footer */}
        <Box sx={(theme) => ({mt: theme.spacing(6), pb: theme.spacing(2.5)})}>
            <Box component="img" src={DocImg} alt="document" sx={{height: 150, width: '100%'}}/>
            <Typography variant="body2" color="grey.700" align="center" sx={(theme) => ({mt: theme.spacing(-2), fontWeight: 700})}>Need Help?</Typography>
            <Typography variant="subtitle1" color="grey.500" align="center" sx={{fontSize: '0.75rem'}}>Please check our docs</Typography>
            <Box sx={(theme) => ({mt: theme.spacing(2.5), display: 'flex', flexDirection: 'column', alignItems: 'center', gap: theme.spacing(2.5)})}>
                <Button color="primary" size="medium">Documentation</Button>
                <Button color="secondary" size="medium">Upgrade to pro</Button>
            </Box>
        </Box>
        </>
    );
}

export default DrawerItems;