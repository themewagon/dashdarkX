import { Grid } from "@mui/material";
import PageVisits from "components/PageVisits";
import SocialTraffic from "components/SocialTraffic";

const DashboardTables = () => {
    return (
        <Grid container spacing={2} sx={{marginTop: '5px'}}>
            <Grid item lg={8}>
                <PageVisits/>
            </Grid>
            <Grid item lg={4}>
                <SocialTraffic/>
            </Grid>
        </Grid>
    );
}

export default DashboardTables;