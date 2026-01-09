import { useState } from 'react';
import Stack from '@mui/material/Stack';
import EChartsReactCore from 'echarts-for-react/lib/core';
import RevenueChartLegend from './RevenueChartLegend';
import { revenueByCustomerData } from 'data/revenueData';
import { revenueChartLegendsData } from 'data/legendsData';

interface LegendsProps {
  chartRef: React.RefObject<EChartsReactCore | null>;
  isSm?: boolean;
}

const RevenueChartLegends = ({ chartRef, isSm }: LegendsProps) => {
  const [toggleColor, setToggleColor] = useState({
    currentClients: true,
    subscribers: true,
    newCustomers: true,
  });

  const handleLegendToggle = (seriesName: string) => {
    const echartsInstance = chartRef.current?.getEchartsInstance();
    if (!echartsInstance) return;

    if (seriesName === 'Current clients') {
      setToggleColor({ ...toggleColor, currentClients: !toggleColor.currentClients });
    } else if (seriesName === 'Subscribers') {
      setToggleColor({ ...toggleColor, subscribers: !toggleColor.subscribers });
    } else if (seriesName === 'New customers') {
      setToggleColor({ ...toggleColor, newCustomers: !toggleColor.newCustomers });
    }

    const option = echartsInstance.getOption() as echarts.EChartsOption;

    if (Array.isArray(option.series)) {
      const series = option.series.map((s) => {
        if (s.name === seriesName && s.type === 'bar') {
          const isBarVisible = (s.data as number[]).some((value) => value !== 0);
          return {
            ...s,
            data: isBarVisible
              ? (s.data as number[]).map(() => 0)
              : revenueByCustomerData.series.find((s) => s.name === seriesName)?.data || [],
          };
        }
        return s;
      });
      echartsInstance.setOption({ series });
    }
  };

  return (
    <Stack
      alignItems="center"
      justifyContent={isSm ? 'center' : 'flex-start'}
      spacing={{ xs: 1, sm: 2 }}
      pt={isSm ? 3 : 0}
      width={isSm ? 1 : 'auto'}
    >
      {revenueChartLegendsData.map((item) => (
        <RevenueChartLegend
          key={item.id}
          data={item}
          toggleColor={toggleColor}
          handleLegendToggle={handleLegendToggle}
        />
      ))}
    </Stack>
  );
};

export default RevenueChartLegends;
