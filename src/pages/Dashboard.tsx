import Grid from '@mui/material/Grid';
import KPIs from 'components/sections/dashboard/kpi/KPIs';
import WebsiteVisitors from 'components/sections/dashboard/website-visitors/WebsiteVisitors';

const Dashboard = () => {
  return (
    <Grid container spacing={{ xs: 2.5, sm: 3, lg: 3.75 }}>
      <Grid size={12}>
        <KPIs />
      </Grid>

      <Grid size={{ xs: 12, xl: 4 }}>
        <WebsiteVisitors />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
