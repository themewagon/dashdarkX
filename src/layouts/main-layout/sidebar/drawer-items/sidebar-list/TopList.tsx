import List from '@mui/material/List';
import ListItem from './list-item';
import { topListRoutes } from './routes';

const TopList = () => {
  return (
    <List sx={{ px: 3.5, width: 1 }} component="nav">
      {topListRoutes.map((route, index) => {
        return <ListItem key={index} route={route} />;
      })}
    </List>
  );
};

export default TopList;
