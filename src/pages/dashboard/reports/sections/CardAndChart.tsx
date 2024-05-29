import Grid from '@mui/material/Grid';
import ProductsCard from 'pages/dashboard/reports/components/products-card';
import LineChart from 'pages/dashboard/reports/components/line-chart';

const CardAndChart = () => {
  return (
    <Grid container spacing={{ xs: 2.5, sm: 3, lg: 3.75 }}>
      <Grid item xs={12} xl={4}>
        <ProductsCard />
      </Grid>
      <Grid item xs={12} xl={8}>
        <LineChart />
      </Grid>
    </Grid>
  );
};

export default CardAndChart;
