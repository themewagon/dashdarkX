import { ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { Icon } from '@iconify/react';

interface pathType {
    path: string,
    name: string,
    icon: string
}

const SidebarLink = (props: pathType) => {
    const {name, path, icon} = props;
    const theme = useTheme();
    // check the path is active or not
    const isActivePath = useLocation().pathname.split('/')[1] === path;

    return (
        <Link to={`/${path}`} style={{textDecoration: 'none'}}>
            <ListItemButton sx={{boxShadow: `${isActivePath ? theme.customShadows[0] : null}`}}>
                <ListItemIcon sx={{backgroundColor: `${isActivePath ? theme.palette.primary.main : null}`}}>
                    <Icon icon={`ion:${icon}`} style={{color: `${isActivePath ? theme.palette.neutral.contrastText : theme.palette.primary.main}`, fontSize: '1rem'}}/>
                </ListItemIcon>
                <ListItemText sx={{color: `${isActivePath ? theme.palette.neutral.light : theme.palette.action.disabled}`}}>{name}</ListItemText>
            </ListItemButton>
        </Link>
    );
}

export default SidebarLink;