import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import CollapseListItem from './CollapseListItem';
import ProfileListItem from './ProfileListItem';
import { topListData, bottomListData, profileListData } from 'data/sidebarListData';

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
