import List from '@mui/material/List';
import CollapseListItem from './CollapseListItem';
import { topListRoutes } from './routes';

const TopList = () => {
  return (
    <List sx={{ px: 3.5, width: 1 }} component="nav">
      {topListRoutes.map((route) => {
        return <CollapseListItem route={route} />;
      })}
    </List>
  );
};

export default TopList;
