import { Grid } from "@mui/material";
import BarChart from "components/BarChart";
import LineChart from "components/LineChart";

const Charts = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} xl={8}>
                <LineChart/>
            </Grid>
            <Grid item xs={12} xl={4}>
                <BarChart/>
            </Grid>
        </Grid>
    );
}

export default Charts;