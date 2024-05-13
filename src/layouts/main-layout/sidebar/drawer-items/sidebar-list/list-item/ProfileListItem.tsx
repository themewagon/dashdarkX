import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import IconifyIcon from 'components/base/IconifyIcon';
import AvatarImage from 'assets/images/avater.png';
import CollapseList from './CollapseList';

interface profileListProps {
  route: {
    path: string;
    profileName: string;
    avater?: string;
    children: { path: string; title: string }[];
  };
}

const ProfileListItem = ({ route }: profileListProps) => {
  const { profileName, path, children } = route;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick} sx={{ mt: 2 }}>
        <Stack alignItems="center" justifyContent="space-between" sx={{ width: 1 }}>
          <Stack spacing={1} alignItems="center">
            <Avatar
              src={AvatarImage}
              sx={(theme) => ({
                height: 32,
                width: 32,
                bgcolor: theme.palette.primary.main,
              })}
            />
            <Stack direction="column">
              <Typography variant="subtitle2" color="text.primary" sx={{ letterSpacing: 1 }}>
                {profileName}
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

      <CollapseList open={open} parentPath={path} children={children} />
    </>
  );
};

export default ProfileListItem;
