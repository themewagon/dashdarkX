import { Box, Typography, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { Icon } from '@iconify/react';

interface pathType {
    path: string,
    name: string,
    icon: string
}

const IconLink = (props: pathType) => {
    const {name, path, icon} = props;
    const theme = useTheme();
    // If (given path == current path) then the path is active, otherwise not
    const isActivePath = useLocation().pathname.split('/').shift() === path;

    return (
        <Link to={`/${path}`} style={{textDecoration: 'none'}}>
            <Box sx={{padding: '0 1rem', width: '100%', height: '54px', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '12px', boxShadow: `${isActivePath ? theme.customShadows[0] : null}`}}>
                <Box sx={{width: '30px', height: '30px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${isActivePath ? theme.palette.secondary.main : null}`}}>
                    <Icon icon={`ion:${icon}`} style={{color: `${isActivePath ? '#fff' : theme.palette.secondary.main}`, fontSize: '1rem'}}/>
                </Box>
                <Typography variant="caption" sx={{color: `${isActivePath ? theme.palette.neutral.light : theme.palette.action.disabled}`}}>{name}</Typography>
            </Box>
        </Link>
    );
}

export default IconLink;