import { data } from "./StackedBarChart";

interface chartsOptionsProps {
  chartType: string;
  activeBarIndex?: number | null;
}

export const getChartsOptions = ({ chartType, activeBarIndex }: chartsOptionsProps) => {
  if (chartType === 'circular') {
    const activeColors = ['#00C2FF', '#0E43FB', '#CB3CFF'];
    const disabledColors = ['#004466', '#082366', '#552266'];

    const cricularChartOption = {
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
                activeBarIndex === 0 || activeBarIndex === null
                  ? activeColors[0]
                  : disabledColors[0],
            },
          },
          {
            value: 60,
            itemStyle: {
              color:
                activeBarIndex === 1 || activeBarIndex === null
                  ? activeColors[1]
                  : disabledColors[1],
            },
          },
          {
            value: 80,
            itemStyle: {
              color:
                activeBarIndex === 2 || activeBarIndex === null
                  ? activeColors[2]
                  : disabledColors[2],
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
            fill: '#fff',
            fontSize: 28,
            fontWeight: 500,
            letterSpacing: 1,
            fontFamily: 'Work Sans',
          },
        },
      ],
    };

    return cricularChartOption;
  } 
  
  
  if (chartType === 'stacked-bar-chart') {
    const stackedBarChartOptions = {
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
          color: '#AEB9E1',
          fontSize: '12px',
          margin: 24,
          fontFamily: 'Questrial',
        },
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: '#AEB9E1',
          fontSize: '12px',
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
      series: data.series.map((serie, index) => ({
        name: serie.name,
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
          color: ['#CB3CFF', '#0E43FB', '#00C2FF'][index],
        },
        data: serie.data,
      })),
    };

    return stackedBarChartOptions;
  }
};
