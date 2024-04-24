import Charts from "pages/dashboard/sections/Charts";
import FirstCards from "pages/dashboard/sections/FirstCards";
import DashboardTables from "pages/dashboard/sections/DashboardTables";

const Dashboard = () => {
    return (
        <>
            <FirstCards/>
            <Charts/>
            <DashboardTables/>
        </>
    );
}

export default Dashboard;