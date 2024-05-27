import TopCards from './sections/TopCards';
import MainCharts from './sections/MainCharts';
import CardAndChart from './sections/CardAndChart';
import EditableDataGrid from './sections/EditableDataGrid';

const Dashboard = () => {
  return (
    <>
      <TopCards />
      <MainCharts />
      <CardAndChart />
      <EditableDataGrid/>
    </>
  );
};

export default Dashboard;
