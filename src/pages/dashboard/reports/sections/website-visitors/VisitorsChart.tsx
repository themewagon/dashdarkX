import { SxProps, useTheme } from '@mui/material';
import { fontFamily } from 'theme/typography';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { PolarComponent, TooltipComponent, GraphicComponent } from 'echarts/components';
import ReactEchart from 'components/base/ReactEchart';
import EChartsReactCore from 'echarts-for-react/lib/core';

echarts.use([PolarComponent, TooltipComponent, GraphicComponent, BarChart, CanvasRenderer]);

interface polarBarChartProps {
  chartRef: React.RefObject<EChartsReactCore>;
  sx?: SxProps;
}

const VisitorsChart = ({ chartRef, ...rest }: polarBarChartProps) => {
  const theme = useTheme();

  const colors = [
    theme.palette.secondary.main,
    theme.palette.secondary.lighter,
    theme.palette.primary.main,
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
    series: [
      {
        type: 'bar',
        data: [
          {
            type: 'Direct',
            value: 50,
            itemStyle: {
              color: colors[0],
            },
          },
          {
            type: 'Social',
            value: 60,
            itemStyle: {
              color: colors[1],
            },
          },
          {
            type: 'Organic',
            value: 80,
            itemStyle: {
              color: colors[2],
            },
          },
        ],
        coordinateSystem: 'polar',
        barCategoryGap: '35%',
        label: {
          show: false,
        },
      },
    ],
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
          fontFamily: fontFamily.workSans,
          letterSpacing: 1,
        },
      },
    ],
  };

  return <ReactEchart ref={chartRef} echarts={echarts} option={option} {...rest} />;
};

export default VisitorsChart;
