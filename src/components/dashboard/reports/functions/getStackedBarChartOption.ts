import { useTheme } from '@mui/material';

export const data = {
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [
    {
      name: 'Current clients',
      data: [14000, 30000, 38000, 36000, 16000, 24000, 10000, 44000, 12000, 6000, 12000, 24000],
    },
    {
      name: 'Subscribers',
      data: [12000, 20000, 26000, 12000, 10000, 32000, 6000, 8000, 12000, 18000, 16000, 6000],
    },
    {
      name: 'New customers',
      data: [12000, 26000, 24000, 24000, 8000, 14000, 0, 38000, 14000, 30000, 16000, 28000],
    },
  ],
};

export const getStackedBarChartOption = () => {
  const theme = useTheme();
  const colors = [
    theme.palette.primary.main,
    theme.palette.secondary.lighter,
    theme.palette.secondary.main,
  ];

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      top: 40,
      bottom: 70,
      left: 50,
      right: 0,
    },
    xAxis: {
      type: 'category',
      data: data.categories,
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        margin: 24,
        color: theme.palette.text.secondary,
        fontSize: theme.typography.caption.fontSize,
        fontFamily: 'Questrial',
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: theme.palette.text.secondary,
        fontSize: theme.typography.caption.fontSize,
        fontFamily: 'Questrial',
        formatter: (value: number) => {
          if (value === 0) {
            return '0K';
          } else if (value === 20000) {
            return '20K';
          } else if (value === 40000) {
            return '40K';
          } else if (value === 60000) {
            return '60K';
          } else if (value === 80000) {
            return '80K';
          } else if (value === 100000) {
            return '100K';
          } else {
            return value;
          }
        },
      },
      splitLine: {
        show: false,
      },
      interval: 20000,
      max: 100000,
    },
    series: data.series.map((item, index) => ({
      name: item.name,
      type: 'bar',
      stack: 'total',
      barWidth: 8,
      label: {
        show: false,
      },
      emphasis: {
        focus: 'series',
      },
      itemStyle: {
        color: colors[index],
      },
      data: item.data,
    })),
  };

  return option;
};
