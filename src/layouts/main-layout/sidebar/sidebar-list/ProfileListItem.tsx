import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Link from '@mui/material/Link';
import IconifyIcon from 'components/base/IconifyIcon';
import AvaterImage from 'assets/images/avater.png';
import { Stack, Avatar, Typography } from '@mui/material';

interface profileProps {
  route: {
    path: string,
    profileName: string,
    avater?: string,
    children: { path: string; title: string }[]
  };
}

const ProfileListItem = ({ route }: profileProps) => {
  const { profileName, children } = route;
  const [open, setOpen] = useState(false);

  const currentPathList = useLocation()
    .pathname.split('/')
    .filter((path) => path !== '');

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick} sx={{ mt: 2 }}>
        <Stack alignItems="center" justifyContent="space-between" sx={{width: 1}}>
          <Stack spacing={1} alignItems="center">
            <Avatar
              src={AvaterImage}
              sx={(theme) => ({
                height: 32,
                width: 32,
                fontSize: '1rem',
                bgcolor: theme.palette.primary.main,
              })}
            />
            <Stack direction="column">
              <Typography variant="subtitle2" color="text.primary" sx={{ letterSpacing: 1 }}>
                {profileName}
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 400 }}>
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

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" sx={{ mt: 1 }} disablePadding>
          {children.map((route) => {
            const currentChildPath = route.path.split('/').pop();
            return (
              <ListItemButton
                component={Link}
                href={route.path}
                sx={{
                  pl: 1.75,
                  borderLeft: 4,
                  borderStyle: 'solid',
                  borderColor:
                    currentPathList[1] === currentChildPath ? 'primary.main' : 'transparent',
                  bgcolor: currentPathList[1] === currentChildPath ? 'info.main' : 'transparent',
                }}
              >
                <ListItemText
                  primary={route.title}
                  sx={{
                    '& .MuiListItemText-primary': {
                      color: currentPathList[1] === currentChildPath ? 'neutral.lighter' : null,
                    },
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </>
  );
};

export default ProfileListItem;
