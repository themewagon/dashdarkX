import CardsGroup from './sections/CardsGroup';
import DashboardTables from 'pages/dashboard/sections/DashboardTables';
import MainCharts from './sections/MainCharts';

const Dashboard = () => {
  return (
    <>
      <CardsGroup />
      <MainCharts/>
      <DashboardTables />
    </>
  );
};

export default Dashboard;
