import { useTheme } from '@mui/material';

interface chartOptionProps {
  data?: object[];
  activeBarIndex?: number | null;
}

export const getCircularChartOption = ({ activeBarIndex }: chartOptionProps) => {
  const theme = useTheme();
  const activeColors = [
    theme.palette.secondary.main,
    theme.palette.secondary.lighter,
    theme.palette.primary.main,
  ];
  const disabledColors = [
    theme.palette.secondary.dark,
    theme.palette.secondary.darker,
    theme.palette.primary.dark,
  ];

  const option = {
    polar: {
      radius: [80, '75%'],
    },
    angleAxis: {
      max: 100,
      startAngle: 180,
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
    radiusAxis: {
      show: false,
      type: 'category',
      data: ['Direct', 'Social', 'Organic'],
    },
    tooltip: {},
    series: {
      type: 'bar',
      data: [
        {
          value: 50,
          itemStyle: {
            color:
              activeBarIndex === 0 || activeBarIndex === null ? activeColors[0] : disabledColors[0],
          },
        },
        {
          value: 60,
          itemStyle: {
            color:
              activeBarIndex === 1 || activeBarIndex === null ? activeColors[1] : disabledColors[1],
          },
        },
        {
          value: 80,
          itemStyle: {
            color:
              activeBarIndex === 2 || activeBarIndex === null ? activeColors[2] : disabledColors[2],
          },
        },
      ],
      coordinateSystem: 'polar',
      label: {
        show: false,
        position: 'middle',
        formatter: '{b}: {c}',
      },
      barCategoryGap: '35%',
    },
    graphic: [
      {
        type: 'text',
        left: 'center',
        top: 'middle',
        style: {
          text: '150k',
          fill: theme.palette.text.primary,
          fontSize: theme.typography.h3.fontSize,
          fontWeight: theme.typography.subtitle2.fontWeight,
          fontFamily: 'Work Sans',
          letterSpacing: 1,
        },
      },
    ],
  };
  return option;
};
