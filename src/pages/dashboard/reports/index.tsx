import TopCards from './sections/TopCards';
import MainCharts from './sections/MainCharts';
import CardAndChart from './sections/CardAndChart';
import DataGridTable from './sections/DataGridTable';

const Dashboard = () => {
  return (
    <>
      <TopCards />
      <MainCharts />
      <CardAndChart />
      <DataGridTable/>
    </>
  );
};

export default Dashboard;
