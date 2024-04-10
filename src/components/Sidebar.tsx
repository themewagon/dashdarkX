import { Box, Stack, Hidden, Typography, useTheme, Button } from "@mui/material";

import LogoImg from "assets/images/logo.svg";
import LineImg from "assets/images/line.svg";
import docImg from "assets/images/document.svg";
import IconLink from "./IconLink";
import { Link } from "react-router-dom";

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

const accountLinks = [
    {
        name: 'Profile',
        path: 'profile',
        icon: 'person'
    },
    {
        name: 'Sign In',
        path: 'signin',
        icon: 'document'
    },
    {
        name: 'Sign Up',
        path: 'signup',
        icon: 'rocket-sharp'
    },
]

const Sidebar = () => {
    const theme = useTheme();

    return (
        <Box component="section" sx={{padding: '30px 22px 40px', width: '265px', backgroundColor: '#fff', borderRadius: '0.625rem', boxShadow: theme.customShadows[0]}}>
            <Link to='/' style={{textDecoration: 'none'}}>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem'}}>
                    <img src={LogoImg} alt="logo" style={{height: '24px', width: '24px'}}/>
                    <Hidden mdDown>
                        <Typography variant="h5" sx={{color: theme.palette.neutral.main}}>argon</Typography>
                    </Hidden>
                </Box>
            </Link>

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

            <Stack direction="column" sx={{marginTop: '22px'}}> 
                <Typography variant="caption" sx={{margin: '0 0 1rem 1rem', color: theme.palette.neutral.light, textTransform: 'uppercase'}}>Account Pages</Typography>
                {
                    accountLinks.map((item, index) => {
                        return <IconLink key={index} path={item.path} name={item.name} icon={item.icon}/>
                    })
                }
            </Stack>

            <Box sx={{marginTop: '3rem'}}>
                <img src={docImg} alt="document" style={{height: '117px', width: '100%'}}/>
                <Typography variant="body2" sx={{color: theme.palette.neutral.light, fontWeight: 700, textAlign: 'center'}}>Need Help?</Typography>
                <Typography variant="subtitle1" sx={{color: theme.palette.action.active, fontSize: '0.75rem', textAlign: 'center'}}>Please check our docs</Typography>
                <Box sx={{marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
                    <Button sx={{width: '186px', backgroundColor: theme.palette.secondary.main, '&:hover': {backgroundColor: theme.palette.secondary.main}}}>Documentation</Button>
                    <Button sx={{width: '186px', backgroundColor: theme.palette.neutral.light, '&:hover': {backgroundColor: theme.palette.neutral.light}}}>Upgrade to pro</Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Sidebar;