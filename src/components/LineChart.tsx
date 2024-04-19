import { Box, Paper, Typography, useTheme } from '@mui/material';
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
            bottom: 100,
            left: 44,
            right: 4
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    show: false
                },
                axisLine: {
                    onZero: false,
                    show: false,
                    lineStyle: {
                        color: colors[1],
                    }
                },
                // prettier-ignore
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                axisLabel: {
                    color: '#151928',
                    fontSize: '12px',
                    fontWeight: 700,
                    margin: 28,
                    padding: [0, 16, 0, 0],
                },
                boundaryGap: false,
            },
            {
                type: 'category',
                boundaryGap: false,
                show: false
            }
        ],
        yAxis: [
            {
                type: 'value',
                interval: 100,
                max: 500,
                axisLabel: {
                    color: '#151928',
                    fontSize: '12px',
                    fontWeight: 700,
                    margin: 20
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        width: 1,
                        color: '#E2E8F0'
                    }
                }
            },
        ],
        series: [
            {
                name: 'Precipitation(2020)',
                type: 'line',
                xAxisIndex: 1,
                smooth: true,
                emphasis: {
                    focus: 'series'
                },
                data: [
                    500, 170, 200, 280, 230, 220, 240, 210, 100, 140, 180, 130
                ],
                showSymbol: false,
                lineStyle: {
                    width: 3 // Change the width as needed
                },
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
                        }
                    ])
                },
            },
            {
                name: 'Precipitation(2021)',
                type: 'line',
                smooth: true,
                emphasis: {
                    focus: 'series'
                },
                data: [
                    190, 280, 250, 370, 380, 470, 400, 300, 360, 220, 390, 430
                ],
                showSymbol: false,
                lineStyle: {
                    width: 3 // Change the width as needed
                },
            }
        ]
    };

    
    return (
        <Box component={Paper} sx={{height: '490px'}}>
            <Typography variant="h6" sx={{background: "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)", WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} gutterBottom>Sales overview</Typography>
            <Typography variant="subtitle2" component="p" sx={{color: theme.palette.neutral.light}}>
                <Typography variant="subtitle2" component="span" sx={{color: theme.palette.success.light, fontWeight: 700}}>(+5) more</Typography> in 2021
            </Typography>
            <ReactECharts option={option} notMerge={true} lazyUpdate={true} style={{height: '100%', width: '100%'}}/>
        </Box>
    );
}

export default LineChart;