import { Box, Stack, Hidden, Typography, useTheme, Button, Paper, ListItemButton } from "@mui/material";

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
        <Box sx={{height: 'calc(100vh - 60px)', overflow: 'hidden', borderRadius: '20px'}}>
            <Box sx={{height: '100%', width: '100%', overflowY: 'scroll'}} component={Paper}>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <ListItemButton sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img src={LogoImg} alt="logo" style={{marginRight: '8px', height: '24px', width: '24px'}}/>
                        <Hidden mdDown>
                            <Typography variant="h5" color={theme.palette.neutral.main}>argon</Typography>
                        </Hidden>
                    </ListItemButton>
                </Link>

                <Box>
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

                <Box sx={{marginTop: '3rem', paddingBottom: '20px'}}>
                    <img src={docImg} alt="document" style={{height: '117px', width: '100%'}}/>
                    <Typography variant="body2" sx={{color: theme.palette.neutral.light, fontWeight: 700, textAlign: 'center'}}>Need Help?</Typography>
                    <Typography variant="subtitle1" sx={{color: theme.palette.action.active, fontSize: '0.75rem', textAlign: 'center'}}>Please check our docs</Typography>
                    <Box sx={{marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
                        <Button color="primary" size="medium">Documentation</Button>
                        <Button color="secondary" size="medium">Upgrade to pro</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Sidebar;