import { Box } from "@mui/material";
import Charts from "sections/Charts";
import DashboardTables from "sections/DashboardTables";
import FirstCards from "sections/FirstCards";

const Dashboard = () => {
    return (
        <Box sx={{width: '100%', height: 'auto'}}>
            <FirstCards/>
            <Charts/>
            <DashboardTables/>
        </Box>
    );
}

export default Dashboard;