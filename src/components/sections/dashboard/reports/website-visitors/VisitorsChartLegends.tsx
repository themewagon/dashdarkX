import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import VisitorsChartLegend from './VisitorsChartLegend';
import EChartsReactCore from 'echarts-for-react/lib/core';

interface LegendsProps {
  chartRef: React.RefObject<EChartsReactCore>;
}

export const legendsData = [
  {
    id: 1,
    type: 'Organic',
    rate: '80%',
  },
  {
    id: 2,
    type: 'Social',
    rate: '60%',
  },
  {
    id: 3,
    type: 'Direct',
    rate: '50%',
  },
];

const VisitorsChartLegends = ({ chartRef }: LegendsProps) => {
  const theme = useTheme();

  const [toggleColor, setToggleColor] = useState({
    organic: true,
    social: true,
    direct: true,
  });

  useEffect(() => {
    const handleBodyClick = (e: MouseEvent) => {
      handleToggleLegend(e as unknown as React.MouseEvent, null);
    };

    document.body.addEventListener('click', handleBodyClick);

    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, []);

  const handleToggleLegend = (e: React.MouseEvent, type: string | null) => {
    e.stopPropagation();
    const echartsInstance = chartRef.current?.getEchartsInstance();
    if (!echartsInstance) return;

    const option = echartsInstance.getOption() as echarts.EChartsOption;

    if (type === 'Organic') {
      setToggleColor({ organic: true, social: false, direct: false });
    } else if (type === 'Social') {
      setToggleColor({ organic: false, social: true, direct: false });
    } else if (type === 'Direct') {
      setToggleColor({ organic: false, social: false, direct: true });
    } else {
      setToggleColor({ organic: true, social: true, direct: true });
    }

    if (Array.isArray(option.series)) {
      const series = option.series.map((s) => {
        if (Array.isArray(s.data)) {
          s.data.forEach((item) => {
            if (type !== null && item.itemStyle && item.itemStyle.color) {
              if (type === item.type) {
                if (type === 'Organic') {
                  item.itemStyle.color = theme.palette.primary.main;
                } else if (type === 'Social') {
                  item.itemStyle.color = theme.palette.secondary.lighter;
                } else if (type === 'Direct') {
                  item.itemStyle.color = theme.palette.secondary.main;
                }
              } else {
                if (item.type === 'Organic') {
                  item.itemStyle.color = theme.palette.primary.dark;
                } else if (item.type === 'Social') {
                  item.itemStyle.color = theme.palette.secondary.darker;
                } else if (item.type === 'Direct') {
                  item.itemStyle.color = theme.palette.secondary.dark;
                }
              }
            } else {
              if (item.type === 'Organic') {
                item.itemStyle.color = theme.palette.primary.main;
              } else if (item.type === 'Social') {
                item.itemStyle.color = theme.palette.secondary.lighter;
              } else if (item.type === 'Direct') {
                item.itemStyle.color = theme.palette.secondary.main;
              }
            }
          });
        }
        return s;
      });

      echartsInstance.setOption({ series });
    }
  };

  return (
    <Stack mt={-1} spacing={3} direction="column">
      {legendsData.map((item) => (
        <VisitorsChartLegend
          key={item.id}
          data={item}
          toggleColor={toggleColor}
          handleToggleLegend={handleToggleLegend}
        />
      ))}
    </Stack>
  );
};

export default VisitorsChartLegends;
