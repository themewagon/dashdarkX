import { Grid } from "@mui/material";
import PageVisitsTable from "components/PageVisitsTable";
import SocialTrafficTable from "components/SocialTrafficTable";

const DashboardTables = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} xl={8}>
                <PageVisitsTable/>
            </Grid>
            <Grid item xs={12} xl={4}>
                <SocialTrafficTable/>
            </Grid>
        </Grid>
    );
}

export default DashboardTables;