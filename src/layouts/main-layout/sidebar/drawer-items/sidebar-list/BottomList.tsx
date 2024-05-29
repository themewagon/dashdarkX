import List from '@mui/material/List';
import ListItem from './list-item';
import sitemap from 'routes/sitemap';
import ProfileListItem from './list-item/ProfileListItem';

const BottomList = () => {
  const routes = sitemap.filter((item) => {
    const id = item.id;
    if (id === 'template-pages' || id === 'settings') {
      return item;
    }
    return null;
  });

  const profileRoute = sitemap.find((item) => item.id === 'account-settings');

  return (
    <List component="nav">
      {routes.map((route, index) => {
        return <ListItem key={index} {...route} />;
      })}
      {profileRoute && <ProfileListItem {...profileRoute} />}
    </List>
  );
};

export default BottomList;
