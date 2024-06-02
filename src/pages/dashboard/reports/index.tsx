import TopCards from './sections/top-cards';
import MainCharts from './sections/MainCharts';
import CardAndChart from './sections/CardAndChart';
import OrdersStatus from './sections/orders-status';

const Reports = () => {
  return (
    <>
      <TopCards />
      <MainCharts />
      <CardAndChart />
      <OrdersStatus/>
    </>
  );
};

export default Reports;
