import { useLocation } from 'react-router-dom';
import { SubMenuItem } from 'routes/sitemap';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import Link from '@mui/material/Link';

interface collapseListProps {
  open: boolean;
  children: SubMenuItem[];
}

const ProfileCollapseList = (props: collapseListProps) => {
  const { open, children } = props;

  const currentPath = useLocation().pathname.split('/').pop();

  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {children.map((route, index) => {
          const isActivePath =
            currentPath === route.pathName || (route.active && currentPath === '');
          return (
            <ListItemButton
              key={index}
              component={Link}
              href={route.path}
              sx={{
                pl: 1.75,
                borderLeft: 4,
                borderStyle: 'solid',
                borderColor: isActivePath ? 'primary.main' : 'transparent !important',
                bgcolor: isActivePath ? 'info.dark' : 'info.darker',
              }}
            >
              <ListItemText
                primary={route.name}
                sx={{
                  '& .MuiListItemText-primary': {
                    color: isActivePath ? 'text.primary' : null,
                  },
                }}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Collapse>
  );
};

export default ProfileCollapseList;
