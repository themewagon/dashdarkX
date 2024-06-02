import Grid from '@mui/material/Grid';
import Products from './products';
import CompletedTask from './completed-task';

const CardAndChart = () => {
  return (
    <Grid container spacing={{ xs: 2.5, sm: 3, lg: 3.75 }}>
      <Grid item xs={12} xl={4}>
        <Products />
      </Grid>
      <Grid item xs={12} xl={8}>
        <CompletedTask />
      </Grid>
    </Grid>
  );
};

export default CardAndChart;
