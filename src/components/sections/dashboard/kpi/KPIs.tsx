import { kpiData } from 'data/kpiData';
import Grid from '@mui/material/Grid';
import KPI from './KPI';

const KPIs = () => {
  return (
    <Grid container spacing={{ xs: 2.5, sm: 3, lg: 3.75 }}>
      {kpiData.map((item) => {
        return <KPI key={item.id} {...item} />;
      })}
    </Grid>
  );
};

export default KPIs;
