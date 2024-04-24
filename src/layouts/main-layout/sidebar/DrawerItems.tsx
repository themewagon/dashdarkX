import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Image from "components/base/Image";
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
        <ButtonBase component={Link} href='/' sx={{py: 1.2, width: 1}}>
            <Stack mx="auto" alignItems="center" justifyContent="center">
                <Image src={LogoImg} alt="logo" sx={{mr: 1, height: 24, width: 24}}/>
                <Typography variant="h5" color="grey.800">argon</Typography>
            </Stack>
        </ButtonBase>
        
        {/* divider */}
        <Box component="img" src={LineImg} alt="divider" sx={{mt: 1.2, width: 1}}/>
        
        {/* sidebar links */}
        <SidebarLinks title="" navLinks={topNavLinks}/>
        <SidebarLinks title="Account Pages" navLinks={bottomNavLinks}/>

        {/* sidebar footer */}
        <Box sx={{mt: 6, pb: 2.5}}>
            <Image src={DocImg} alt="document" sx={{height: 150, width: 1}}/>
            <Typography variant="body2" color="grey.700" align="center" sx={{mt: -2, fontWeight: 700}}>Need Help?</Typography>
            <Typography variant="subtitle1" color="grey.500" align="center" sx={{fontSize: '0.75rem'}}>Please check our docs</Typography>
            <Stack direction="column" spacing={2.4} alignItems="center" sx={{mt: 2.5}}>
                <Button color="primary" size="medium">Documentation</Button>
                <Button color="secondary" size="medium">Upgrade to pro</Button>
            </Stack>
        </Box>
        </>
    );
}

export default DrawerItems;