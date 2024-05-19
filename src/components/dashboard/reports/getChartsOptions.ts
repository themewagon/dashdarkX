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
};
