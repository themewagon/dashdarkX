import { useState } from 'react';
import { MenuItem } from 'routes/sitemap';
import { useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import IconifyIcon from 'components/base/IconifyIcon';
import AvatarImage from 'assets/images/avater.png';
import CollapseList from './CollapseList';

const ProfileListItem = ({ id, subheader, items }: MenuItem) => {
  const [open, setOpen] = useState(false);

  const currentPath = useLocation().pathname;
  const isActivePath = currentPath.split('/')[2] === id;

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton
        onClick={handleClick}
        sx={{ mt: 2, bgcolor: isActivePath ? 'info.dark' : null }}
      >
        <Stack alignItems="center" justifyContent="space-between" sx={{ width: 1 }}>
          <Stack spacing={1} alignItems="center">
            <Avatar
              src={AvatarImage}
              sx={(theme) => ({
                height: 36,
                width: 36,
                bgcolor: theme.palette.primary.main,
              })}
            />
            <Stack direction="column">
              <Typography variant="subtitle2" color="text.primary" sx={{ letterSpacing: 0.5 }}>
                {subheader}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={(theme) => ({ fontWeight: theme.typography.subtitle1.fontWeight })}
              >
                Account Settings
              </Typography>
            </Stack>
          </Stack>
          <IconifyIcon
            icon="iconamoon:arrow-right-2-duotone"
            sx={{
              color: 'neutral.dark',
              transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease-in-out',
            }}
          />
        </Stack>
      </ListItemButton>

      <CollapseList open={open} children={items} />
    </>
  );
};

export default ProfileListItem;
