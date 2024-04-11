import { Box, Grid } from "@mui/material";
import FirstCard from "components/FirstCard";

const Dashboard = () => {
    return (
        <Box sx={{width: '100%', height: '500px'}}>
            <Grid container spacing={2}>
                <Grid item lg={3}>
                    <FirstCard/>
                </Grid>
                <Grid item lg={3}>
                    <FirstCard/>
                </Grid>
                <Grid item lg={3}>
                    <FirstCard/>
                </Grid>
                <Grid item lg={3}>
                    <FirstCard/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Dashboard;