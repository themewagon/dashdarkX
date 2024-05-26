import TopCards from './sections/TopCards';
import MainCharts from './sections/MainCharts';
import CardAndChart from './sections/CardAndChart';
// import DataGridTable from './sections/DataGridTable';
import EditableDataGrid from './sections/EditableDataGrid';

const Dashboard = () => {
  return (
    <>
      <TopCards />
      <MainCharts />
      <CardAndChart />
      {/* <DataGridTable/> */}
      <EditableDataGrid/>
    </>
  );
};

export default Dashboard;
