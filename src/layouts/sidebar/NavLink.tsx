import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material";
import { Icon } from '@iconify/react';

interface navLinkProps {
    path: string, 
    name: string, 
    icon: string
}

const NavLink = (props: navLinkProps) => {
    const { name, path, icon } = props;
    const theme = useTheme();
    // check the path is active or not
    const isActivePath = useLocation().pathname.split('/')[1] === path;

    return (
        <Link to={`/${path}`} style={{textDecoration: 'none'}}>
            <ListItemButton sx={{boxShadow: isActivePath ? theme.customShadows[0] : null}}>
                <ListItemIcon sx={{bgcolor: isActivePath ? theme.palette.primary.main : null}}>
                    <Icon icon={`ion:${icon}`} style={{color: isActivePath ? '#fff' : theme.palette.primary.main, fontSize: '1rem'}}/>
                </ListItemIcon>
                <ListItemText sx={{color: isActivePath ? 'grey.700' : 'grey.400'}}>{name}</ListItemText>
            </ListItemButton>
        </Link>
    );
}

export default NavLink;