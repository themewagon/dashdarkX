import { Box, useTheme } from '@mui/material';
import ReactECharts from 'echarts-for-react';

const LineChart = () => {
    const theme = useTheme();
    const colors = ['#5470C6', '#EE6666'];
    const option = {
        color: colors,
        tooltip: {
            trigger: 'none',
            axisPointer: {
                type: 'cross'
            }
        },
        grid: {
            top: 70,
            bottom: 50
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
                data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12']
            },
            {
            type: 'category',
            show: false,
            }
        ],
        yAxis: [
            {
            type: 'value'
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
                2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
            ]
            },
            {
            name: 'Precipitation(2016)',
            type: 'line',
            smooth: true,
            emphasis: {
                focus: 'series'
            },
            data: [
                3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7
            ]
            }
        ]
    };

    
    return (
        <Box sx={{height: '490px', backgroundColor: '#fff', borderRadius: '20px', boxShadow: theme.customShadows[0]}}>
            <ReactECharts
                option={option}
                notMerge={true}
                lazyUpdate={true}
                style={{height: '100%', width: '100%'}}
            />
        </Box>
    );
}

export default LineChart;