import { useState } from 'react';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconifyIcon from 'components/base/IconifyIcon';
import AvatarImage from 'assets/images/avater.png';

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
      <Stack spacing={1} alignItems="center">
        <Tooltip title="Settings">
          <IconButton size="small" sx={{ color: 'text.secondary' }}>
            <IconifyIcon icon={'solar:settings-bold'} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Notifications">
          <IconButton size="small" sx={{ color: 'text.secondary' }}>
            <IconifyIcon icon={'ion:notifications'} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Profile">
          <ButtonBase onClick={handleClick}>
            <Stack
              spacing={1}
              alignItems="center"
              aria-controls={open ? 'account-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
            >
              <Avatar
                src={AvatarImage}
                sx={(theme) => ({
                  ml: 0.8,
                  height: 32,
                  width: 32,
                  bgcolor: theme.palette.primary.main,
                })}
              />
              <Typography variant="subtitle2">Mr. John</Typography>
            </Stack>
          </ButtonBase>
        </Tooltip>
      </Stack>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'hidden',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose} sx={{ borderRadius: 1 }}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ borderRadius: 1 }}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} sx={{ borderRadius: 1 }}>
          <ListItemIcon>
            <IconifyIcon icon={'mingcute:user-add-fill'} />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ borderRadius: 1 }}>
          <ListItemIcon>
            <IconifyIcon icon={'solar:settings-bold'} />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ borderRadius: 1 }}>
          <ListItemIcon>
            <IconifyIcon icon={'material-symbols:logout'} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default TopbarRight;
