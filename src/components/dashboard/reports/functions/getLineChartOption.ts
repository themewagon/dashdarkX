import { useTheme } from '@mui/material';
import { graphic } from 'echarts';

export const getLineChartOption = () => {
  const theme = useTheme();

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none',
      },
    },
    grid: {
      top: 30,
      bottom: 70,
      left: 30,
      right: 0,
    },
    xAxis: {
      type: 'category',
      data: ['Jan1', 'Jan8', 'Jan16', 'Jan24', 'Jan31', 'Feb1', 'Feb8', 'Feb16', 'Feb24'],
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        color: theme.palette.text.secondary,
        fontSize: '12px',
        fontFamily: 'Questrial',
        margin: 10,
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: theme.palette.text.secondary,
        fontSize: theme.typography.caption.fontSize,
        fontFamily: 'Questrial',
      },
      splitLine: {
        show: false,
      },
      interval: 100,
      max: 300,
    },
    series: [
      {
        data: [0, 130, 130, 300, 90, 220, 180, 240, 90],
        type: 'line',
        showSymbol: false,
        lineStyle: {
          color: theme.palette.secondary.main,
          width: 1.2,
        },
        areaStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(0, 194, 255, 0.2)',
            },
            {
              offset: 1,
              color: 'rgba(0, 194, 255, 0)',
            },
          ]),
        },
      },
    ],
  };

  return option;
};
