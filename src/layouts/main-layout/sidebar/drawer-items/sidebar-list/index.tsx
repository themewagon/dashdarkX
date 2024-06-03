import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from './list-item';
import ProfileListItem from './list-item/ProfileListItem';
import { topListData, bottomListData, profileListData } from './listsData';

const SidebarList = () => {
  return (
    <>
      <List component="nav">
        {topListData.map((route, index) => {
          return <ListItem key={index} {...route} />;
        })}
      </List>

      <Divider />

      <List component="nav">
        {bottomListData.map((route, index) => {
          return <ListItem key={index} {...route} />;
        })}
        {profileListData && <ProfileListItem {...profileListData} />}
      </List>
    </>
  );
};

export default SidebarList;
