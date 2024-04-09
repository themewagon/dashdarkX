import { Box, Stack, Hidden, Typography, useTheme } from "@mui/material";

import LogoImg from "assets/images/logo.svg";
import LineImg from "assets/images/line.svg";
import IconLink from "./IconLink";

const navLinks = [
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

const Sidebar = () => {
    const theme = useTheme();

    return (
        <Box component="section" sx={{padding: '30px 22px 40px', width: '265px', borderRadius: '0.625rem', boxShadow: theme.customShadows[0]}}>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem'}}>
                <img src={LogoImg} alt="logo" style={{height: '24px', width: '24px'}}/>
                <Hidden mdDown>
                    <Typography variant="h5">argon</Typography>
                </Hidden>
            </Box>

            <Box sx={{marginTop: '10px'}}>
                <img src={LineImg} alt="divider" style={{width: '100%', height: '1px'}}/>
            </Box>

            <Stack direction="column" sx={{marginTop: '22px'}}>
                {
                    navLinks.map((item, index) => {
                        return <IconLink key={index} path={item.path} name={item.name} icon={item.icon}/>
                    })
                }
            </Stack>
        </Box>
    );
}

export default Sidebar;