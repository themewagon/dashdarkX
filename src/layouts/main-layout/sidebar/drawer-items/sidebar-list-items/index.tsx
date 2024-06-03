import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import CollapseListItem from './collapse-list-item';
import ProfileListItem from './profile-list-item';
import { topListData, bottomListData, profileListData } from './listsData';

const SidebarListItems = () => {
  return (
    <>
      <List component="nav" sx={{ px: 2.5 }}>
        {topListData.map((route, index) => {
          return <CollapseListItem key={index} {...route} />;
        })}
      </List>

      <Divider />

      <List component="nav" sx={{ px: 2.5 }}>
        {bottomListData.map((route, index) => {
          return <CollapseListItem key={index} {...route} />;
        })}
      </List>

      <List component="nav" sx={{ px: 2.5 }}>
        {profileListData && <ProfileListItem {...profileListData} />}
      </List>
    </>
  );
};

export default SidebarListItems;
