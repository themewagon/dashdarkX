import { Grid } from "@mui/material";
import PageVisitsTable from "components/PageVisitsTable";
import SocialTrafficTable from "components/SocialTrafficTable";

const DashboardTables = () => {
    return (
        <Grid container spacing={2} sx={{marginTop: '5px'}}>
            <Grid item lg={8}>
                <PageVisitsTable/>
            </Grid>
            <Grid item lg={4}>
                <SocialTrafficTable/>
            </Grid>
        </Grid>
    );
}

export default DashboardTables;