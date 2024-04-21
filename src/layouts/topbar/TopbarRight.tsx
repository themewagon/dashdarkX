import { Box, Avatar, Menu, MenuItem, Divider, IconButton, Tooltip, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const TopbarRight = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.4rem'}}>
                <Tooltip title="Settings">
                    <IconButton size="medium" sx={{ color: '#151928' }}>
                        <Icon icon={'ion:settings-sharp'}/>
                    </IconButton>
                </Tooltip>
                
                <Tooltip title="Notifications">
                    <IconButton size="medium" sx={{ color: '#151928' }}>
                        <Icon icon={'ion:notifications'}/>
                    </IconButton>
                </Tooltip>

                <Tooltip title="Profile">
                    <IconButton onClick={handleClick} size="large" aria-controls={open ? 'account-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined}>
                        <Avatar sx={{ width: 36, height: 36, background: theme.palette.primary.main }}>M</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu anchorEl={anchorEl} id="account-menu" open={open} onClose={handleClose} onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        // mt: 1.5,
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
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose} sx={{display: 'flex', alignItems: 'center', gap: '0.4rem', borderRadius: '0.6rem'}}>
                    <Icon icon={'ion:person'} style={{fontSize: '1.2rem'}}/>
                    <Typography sx={{fontSize: '1.1rem', fontWeight: 500}}>Profile</Typography>
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{display: 'flex', alignItems: 'center', gap: '0.4rem', borderRadius: '0.6rem'}}>
                    <Icon icon={'ion:cog'} style={{fontSize: '1.2rem'}}/>
                    <Typography sx={{fontSize: '1.1rem', fontWeight: 500}}>My Account</Typography>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose} sx={{display: 'flex', alignItems: 'center', gap: '0.4rem', borderRadius: '0.6rem'}}>
                    <Icon icon={'ion:log-out'} style={{fontSize: '1.2rem'}}/>
                    <Typography sx={{fontSize: '1.1rem', fontWeight: 500}}>Logout</Typography>
                </MenuItem>
            </Menu>
        </>
    );
}

export default TopbarRight;