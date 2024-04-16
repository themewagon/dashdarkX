import { ListItemButton, useTheme, ListItemIcon, ListItemText } from "@mui/material";
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
    const isActivePath = useLocation().pathname.split('/')[1] === path;

    return (
        <Link to={`/${path}`} style={{textDecoration: 'none'}}>
            <ListItemButton sx={{boxShadow: `${isActivePath ? theme.customShadows[0] : null}`}}>
                <ListItemIcon sx={{backgroundColor: `${isActivePath ? theme.palette.primary.main : null}`}}>
                    <Icon icon={`ion:${icon}`} style={{color: `${isActivePath ? '#fff' : theme.palette.primary.main}`, fontSize: '1rem'}}/>
                </ListItemIcon>
                <ListItemText>{name}</ListItemText>
            </ListItemButton>
        </Link>
    );
}

export default IconLink;