import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import IconifyIcon from 'components/base/IconifyIcon';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CollapseList from './CollapseList';
import { MenuItem } from 'routes/sitemap';

const ListItem = ({ id, subheader, icon, items, active }: MenuItem) => {
  const [open, setOpen] = useState(false);

  const currentPath = useLocation().pathname.split('/')[2];
  const isActivePath = (currentPath === id) || active;

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          {icon && <IconifyIcon
            icon={icon}
            sx={{
              color: isActivePath ? 'primary.main' : null,
            }}
          />}
        </ListItemIcon>
        <ListItemText
          primary={subheader}
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

      <CollapseList open={open} children={items} />
    </>
  );
};

export default ListItem;
