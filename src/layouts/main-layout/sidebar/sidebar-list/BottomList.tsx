import List from '@mui/material/List';
import CollapseListItem from './CollapseListItem';
import ProfileListItem from './ProfileListItem';
import { bottomListRoutes, profileRoute } from './routes';

const BottomList = () => {
  return (
    <List sx={{ px: 3.5, width: 1 }} component="nav">
      {bottomListRoutes.map((route) => {
        return <CollapseListItem route={route} />;
      })}
      <ProfileListItem route={profileRoute} />
    </List>
  );
};

export default BottomList;
