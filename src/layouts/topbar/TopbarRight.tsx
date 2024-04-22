import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const TopbarRight = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box sx={(theme) => ({ display: 'flex', alignItems: 'center', gap: theme.spacing(0.8)})}>
                <Tooltip title="Settings">
                    <IconButton size="medium" sx={{color: 'grey.800'}}>
                        <Icon icon={'ion:settings-sharp'}/>
                    </IconButton>
                </Tooltip>
                
                <Tooltip title="Notifications">
                    <IconButton size="medium" sx={{ color: 'grey.800' }}>
                        <Icon icon={'ion:notifications'}/>
                    </IconButton>
                </Tooltip>

                <Tooltip title="Profile">
                    <IconButton 
                        onClick={handleClick} 
                        size="large" 
                        aria-controls={open ? 'account-menu' : undefined} 
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true">
                        <Avatar sx={(theme) => ({ width: 36, height: 36, bgcolor: theme.palette.primary.main })}>M</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: '#fff',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose} sx={{borderRadius: 4}}>
                    <Avatar/> Profile
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{borderRadius: 4}}>
                    <Avatar/> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose} sx={{borderRadius: 4}}>
                    <ListItemIcon>
                        <Icon icon={'ion:person-add'}/>
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{borderRadius: 4}}>
                    <ListItemIcon>
                        <Icon icon={'ion:settings'}/>
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{borderRadius: 4}}>
                    <ListItemIcon>
                        <Icon icon={'ion:log-out'}/>
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
}

export default TopbarRight;