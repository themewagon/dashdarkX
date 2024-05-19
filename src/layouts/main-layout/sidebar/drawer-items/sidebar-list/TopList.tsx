import List from '@mui/material/List';
import ListItem from './list-item';
import sitemap from 'routes/sitemap';

const TopList = () => {
  const routes = sitemap.filter((item) => {
    const id = item.id;
    if (id === 'template-pages' || id === 'settings' || id === 'account-settings') {
      return null;
    }
    return item;
  });

  return (
    <List sx={{ px: 2.5, width: 1 }} component="nav">
      {routes.map((route, index) => {
        return <ListItem key={index} {...route} />;
      })}
    </List>
  );
};

export default TopList;
