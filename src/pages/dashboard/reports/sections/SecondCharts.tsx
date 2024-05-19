import Grid from '@mui/material/Grid';
import ProductsCard from 'components/dashboard/reports/ProductsCard';
import LineChart from 'components/dashboard/reports/LineChart';

const SecondCharts = () => {
  return (
    <Grid container spacing={3.75}>
      <Grid item xs={12} xl={4}>
        <ProductsCard />
      </Grid>
      <Grid item xs={12} xl={8}>
        <LineChart />
      </Grid>
    </Grid>
  );
};

export default SecondCharts;
