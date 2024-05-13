import Divider from '@mui/material/Divider';
import BottomList from './BottomList';
import TopList from './TopList';

const SidebarList = () => {
  return (
    <>
      <TopList />
      <Divider />
      <BottomList />
    </>
  );
};

export default SidebarList;
