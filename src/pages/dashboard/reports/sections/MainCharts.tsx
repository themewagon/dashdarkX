import Grid from '@mui/material/Grid';
import RevenueByCustomer from './revenue-by-customer';
import WebsiteVisitors from './website-visitors';

const MainCharts = () => {
  return (
    <Grid container spacing={{ xs: 2.5, sm: 3, lg: 3.75 }}>
      <Grid item xs={12} xl={4}>
        <WebsiteVisitors />
      </Grid>
      <Grid item xs={12} xl={8}>
        <RevenueByCustomer />
      </Grid>
    </Grid>
  );
};

export default MainCharts;
