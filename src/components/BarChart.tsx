import { Box, Typography, useTheme } from "@mui/material";
import ReactECharts from 'echarts-for-react';

const BarChart = () => {
    const theme = useTheme();

    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            top: '10%',
            left: '3%',
            right: '4%',
            bottom: '6%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                interval: 10,
                max: 30
            }
        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '14%',
                itemStyle: {
                    color: '#ED8936',
                    borderRadius: [50, 50, 50, 50]
                },
                data: [24, 20, 30, 22, 18, 29]
            }
        ]
    };

    return (
        <Box sx={{padding: '28px 20px 20px', height: '490px', backgroundColor: '#fff', borderRadius: '20px', boxShadow: theme.customShadows[0]}}>
            <Typography variant="caption" sx={{color: theme.palette.action.disabled}}>PERFORMANCE</Typography>
            <Typography variant="h6" sx={{marginTop: '5px', color: theme.palette.neutral.light}}>Total orders</Typography>
            <ReactECharts
                option={option}
                notMerge={true}
                lazyUpdate={true}
                style={{height: '94%', width: '100%'}}
            />
        </Box>
    );
}

export default BarChart;