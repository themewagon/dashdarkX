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
    id: string;
    subheader: string;
    avater?: string;
    items: { name: string, path: string; pathName: string }[];
  };
}

const ProfileListItem = ({ route }: profileListProps) => {
  const { subheader, items } = route;
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
