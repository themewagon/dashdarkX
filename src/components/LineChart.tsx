import { Box, Typography, useTheme } from '@mui/material';
import ReactECharts from 'echarts-for-react';
import { graphic } from 'echarts';


const LineChart = () => {
    const theme = useTheme();
    const colors = ['#3182CE', '#151928'];

    const option = {
        color: colors,
        tooltip: {
            trigger: 'none',
            axisPointer: {
                type: 'cross'
            }
        },
        grid: {
            top: 40,
            bottom: 50,
            left: 30,
            right: 5
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true,
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: colors[1]
                    }
                },
                // prettier-ignore
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            {
                type: 'category',
                show: false,
            }
        ],
        yAxis: [
            {
                type: 'value',
                interval: 100,
                max: 500
            }
        ],
        series: [
            {
                name: 'Precipitation(2015)',
                type: 'line',
                xAxisIndex: 1,
                smooth: true,
                emphasis: {
                    focus: 'series'
                },
                data: [
                    500, 170, 200, 280, 230, 220, 240, 210, 120, 130, 170, 130
                ],
                areaStyle: {
                    // Define gradient for the area shadow
                    color: new graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: 'rgba(2, 213, 202, 0.4)'
                        },
                        {
                          offset: 1,
                          color: 'rgba(43, 168, 162, 0)'
                        }])
                },
            },
            {
                name: 'Precipitation(2016)',
                type: 'line',
                smooth: true,
                emphasis: {
                    focus: 'series'
                },
                data: [
                    190, 230, 220, 350, 345, 440, 430, 300, 330, 270, 250, 430
                ]
            }
        ]
    };

    
    return (
        <Box sx={{padding: '28px 20px 20px', height: '490px', backgroundColor: '#fff', borderRadius: '20px', boxShadow: theme.customShadows[0]}}>
            <Typography variant="h6" sx={{display: 'inline-block', background: "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)", WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Sales overview</Typography>
            <Typography variant="subtitle2" component="p" sx={{marginTop: '6px', color: theme.palette.neutral.light}}><Typography variant="subtitle2" component="span" sx={{color: theme.palette.success.light}}>(+5) more</Typography> in 2021</Typography>
            <ReactECharts
                option={option}
                notMerge={true}
                lazyUpdate={true}
                style={{height: '94%', width: '100%'}}
            />
        </Box>
    );
}

export default LineChart;