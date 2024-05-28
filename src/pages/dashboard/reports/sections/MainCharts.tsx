import Grid from '@mui/material/Grid';
import PolarBarChart from 'components/dashboard/reports/polar-bar-chart';
import StackedBarChart from 'components/dashboard/reports/stacked-bar-chart';

const MainCharts = () => {
  return (
    <Grid container spacing={{ xs: 2.5, sm: 3, lg: 3.75 }}>
      <Grid item xs={12} xl={4}>
        <PolarBarChart />
      </Grid>
      <Grid item xs={12} xl={8}>
        <StackedBarChart />
      </Grid>
    </Grid>
  );
};

export default MainCharts;
