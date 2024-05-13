import List from '@mui/material/List';
import ListItem from './list-item';
import ProfileListItem from './list-item/ProfileListItem';
import { bottomListRoutes, profileRoute } from './routes';

const BottomList = () => {
  return (
    <List sx={{ px: 3.5, width: 1 }} component="nav">
      {bottomListRoutes.map((route, index) => {
        return <ListItem key={index} route={route} />;
      })}
      <ProfileListItem route={profileRoute} />
    </List>
  );
};

export default BottomList;
