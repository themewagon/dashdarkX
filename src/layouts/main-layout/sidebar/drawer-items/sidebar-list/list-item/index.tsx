import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { checkPathMatched } from './checkPathMatched';
import IconifyIcon from 'components/base/IconifyIcon';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CollapseList from './CollapseList';

interface listProps {
  route: {
    path: string;
    title: string;
    icon: string;
    children: { path: string; title: string }[];
  };
}

const ListItem = ({ route }: listProps) => {
  const { path, title, icon, children } = route;
  const [open, setOpen] = useState(false);

  const currentPath = useLocation().pathname;
  const isActivePath = checkPathMatched(currentPath, path, 0, 0);

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
              color: isActivePath ? 'primary.main' : null,
            }}
          />
        </ListItemIcon>
        <ListItemText
          primary={title}
          sx={{
            '& .MuiListItemText-primary': {
              color: isActivePath ? 'primary.main' : null,
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

      <CollapseList open={open} parentPath={path} children={children} />
    </>
  );
};

export default ListItem;
