import { Grid } from "@mui/material";
import BarChart from "components/BarChart";
import LineChart from "components/LineChart";

const Charts = () => {
    return (
        <Grid container spacing={2} sx={{marginTop: '5px'}}>
            <Grid item lg={8}>
                <LineChart/>
            </Grid>
            <Grid item lg={4}>
                <BarChart/>
            </Grid>
        </Grid>
    );
}

export default Charts;