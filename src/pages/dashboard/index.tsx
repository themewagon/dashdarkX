import CardsGroup from './sections/CardsGroup';
import Charts from 'pages/dashboard/sections/Charts';
import DashboardTables from 'pages/dashboard/sections/DashboardTables';

const Dashboard = () => {
  return (
    <>
      <CardsGroup />
      <Charts />
      <DashboardTables />
    </>
  );
};

export default Dashboard;
