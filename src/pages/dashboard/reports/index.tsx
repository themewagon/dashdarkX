import Grid from '@mui/material/Grid';
import TopCards from 'components/sections/top-cards';
import WebsiteVisitors from 'components/sections/website-visitors';
import RevenueByCustomer from 'components/sections/revenue-by-customer';
import Products from 'components/sections/products';
import CompletedTask from 'components/sections/completed-task';
import OrdersStatus from 'components/sections/orders-status';

const Reports = () => {
  return (
    <Grid container spacing={{ xs: 2.5, sm: 3, lg: 3.75 }}>
      <Grid item xs={12}>
        <TopCards />
      </Grid>

      <Grid item xs={12} xl={4}>
        <WebsiteVisitors />
      </Grid>

      <Grid item xs={12} xl={8}>
        <RevenueByCustomer />
      </Grid>

      <Grid item xs={12} xl={4}>
        <Products />
      </Grid>

      <Grid item xs={12} xl={8}>
        <CompletedTask />
      </Grid>

      <Grid item xs={12}>
        <OrdersStatus />
      </Grid>
    </Grid>
  );
};

export default Reports;
