import { useLocation } from 'react-router-dom';
import { checkPathMatched } from './checkPathMatched';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import Link from '@mui/material/Link';

interface collapseListProps {
  open: boolean;
  parentPath: string;
  children: {
    path: string;
    title: string;
  }[];
}

const CollapseList = (props: collapseListProps) => {
  const { open, parentPath, children } = props;

  const currentPath = useLocation().pathname;

  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" sx={{ mt: 1 }} disablePadding>
        {children.map((route, index) => {
          const childPath = route.path;
          const isActivePath = checkPathMatched(currentPath, childPath, -1, 0);
          return (
            <ListItemButton
              key={index}
              component={Link}
              href={childPath === '#' ? childPath : `${parentPath}${childPath}`}
              sx={{
                pl: 1.75,
                borderLeft: 4,
                borderStyle: 'solid',
                borderColor: isActivePath ? 'primary.main' : 'transparent',
                bgcolor: isActivePath ? 'info.dark' : 'transparent',
              }}
            >
              <ListItemText
                primary={route.title}
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

export default CollapseList;
