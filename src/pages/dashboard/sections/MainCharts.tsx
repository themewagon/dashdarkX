import Grid from '@mui/material/Grid';
import CircularChart from 'components/dashboard/CircularChart';
import StackedBarChart from 'components/dashboard/StackedBarChart';

const MainCharts = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12} xl={4}>
                <CircularChart/>
            </Grid>
            <Grid item xs={12} xl={8}>
                <StackedBarChart/>
            </Grid>
        </Grid>
    );
}

export default MainCharts;