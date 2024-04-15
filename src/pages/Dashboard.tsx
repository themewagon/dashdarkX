import { Box, Grid } from "@mui/material";
import BarChart from "components/BarChart";
import FirstCard from "components/FirstCard";
import LineChart from "components/LineChart";

const firstCardData = [
    {
        title: 'TODAY’S MONEY',
        value: '$53,897',
        rate: '+3.48%',
        icon: 'wallet',
    },
    {
        title: 'TODAY’S USERS',
        value: '3,200',
        rate: '+5.20%',
        icon: 'globe-outline'
    },
    {
        title: 'NEW CLIENTS',
        value: '+2,503',
        rate: '-2.82%',
        icon: 'document-text'
    },
    {
        title: 'TOTAL SALES',
        value: '$173,000',
        rate: '+8.12%',
        icon: 'cart'
    }
];

const Dashboard = () => {
    return (
        <Box sx={{width: '100%', height: '500px'}}>
            <Grid container spacing={2}>
                {firstCardData.map((item) => {
                    return <Grid item lg={3}>
                        <FirstCard title={item.title} value={item.value} rate={item.rate} icon={item.icon}/>
                    </Grid>
                })}
            </Grid>

            <Grid container spacing={2} sx={{marginTop: '5px'}}>
                <Grid item lg={8}>
                    <LineChart/>
                </Grid>
                <Grid item lg={4}>
                    <BarChart/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Dashboard;