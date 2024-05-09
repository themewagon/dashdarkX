import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Link from '@mui/material/Link';
import IconifyIcon from 'components/base/IconifyIcon';

interface routeProps {
  route: {
    path: string;
    title: string;
    icon: string;
    children: { path: string; title: string }[];
  };
}

const isPathMatched = (url1: string, url2: string, index1: number, index2: number) => {
  const pathAra1 = url1.split('/').filter((path) => path !== '');
  const pathAra2 = url2.split('/').filter((path) => path !== '');
  index1 = index1 === -1 ? pathAra1.length - 1 : index1;
  index2 = index2 === -1 ? pathAra2.length - 1 : index2;
  return pathAra1[index1] === pathAra2[index2];
};

const CollapseListItem = ({ route }: routeProps) => {
  const { path, title, icon, children } = route;
  const [open, setOpen] = useState(false);

  const currentPath = useLocation().pathname;

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <IconifyIcon
            icon={icon}
            sx={{
              color: isPathMatched(currentPath, path, 0, 0) ? 'primary.main' : null,
            }}
          />
        </ListItemIcon>
        <ListItemText
          primary={title}
          sx={{
            '& .MuiListItemText-primary': {
              color: isPathMatched(currentPath, path, 0, 0) ? 'primary.main' : null,
            },
          }}
        />
        <IconifyIcon
          icon="iconamoon:arrow-right-2-duotone"
          sx={{
            color: 'neutral.dark',
            transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease-in-out',
          }}
        />
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" sx={{ mt: 1 }} disablePadding>
          {children.map((route) => {
            const childPath = route.path;
            return (
              <ListItemButton
                component={Link}
                href={route.path}
                sx={{
                  pl: 1.75,
                  borderLeft: 4,
                  borderStyle: 'solid',
                  borderColor: isPathMatched(currentPath, childPath, -1, 0)
                    ? 'primary.main'
                    : 'transparent',
                  bgcolor: isPathMatched(currentPath, childPath, -1, 0)
                    ? 'info.dark'
                    : 'transparent',
                }}
              >
                <ListItemText
                  primary={route.title}
                  sx={{
                    '& .MuiListItemText-primary': {
                      color: isPathMatched(currentPath, childPath, -1, 0) ? 'text.primary' : null,
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

export default CollapseListItem;
