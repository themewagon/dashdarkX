import { useTheme } from '@mui/material';
import { graphic } from 'echarts';

const getLineChartOptions = () => {
    const theme = useTheme();
    const colors = [theme.palette.primary.main, '#151928'];

    return {
        color: colors,
        tooltip: {
            trigger: 'none',
            axisPointer: {
                type: 'cross',
            },
        },
        grid: {
          top: 40,
          bottom: 100,
          left: 44,
          right: 4,
        },
        xAxis: [
          {
            type: 'category',
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisTick: {
              show: false,
            },
            axisLine: {
              onZero: false,
              show: false,
              lineStyle: {
                color: colors[1],
              },
            },
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
            show: false,
          },
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
              margin: 20,
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dashed',
                width: 1,
                color: '#E2E8F0',
              },
            },
          },
        ],
        series: [
            {
                name: 'Precipitation(2020)',
                type: 'line',
                xAxisIndex: 1,
                smooth: true,
                emphasis: {
                focus: 'series',
                },
                data: [500, 170, 200, 280, 230, 220, 240, 210, 100, 140, 180, 130],
                showSymbol: false,
                lineStyle: {
                width: 3, // Change the width as needed
                },
                areaStyle: {
                // Define gradient for the area shadow
                color: new graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(2, 213, 202, 0.4)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(43, 168, 162, 0)',
                    },
                ]),
            },
        },
        {
            name: 'Precipitation(2021)',
            type: 'line',
            smooth: true,
            emphasis: {
                focus: 'series',
            },
            data: [190, 280, 250, 370, 380, 470, 400, 300, 360, 220, 390, 430],
            showSymbol: false,
            lineStyle: {
                 width: 3, // Change the width as needed
            },
        },],
    };
}

export default getLineChartOptions;