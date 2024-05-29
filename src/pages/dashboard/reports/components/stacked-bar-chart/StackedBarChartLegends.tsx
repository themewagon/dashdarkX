import { useState } from 'react';
import { data } from './GetBarChartWithOption';
import { fontFamily } from 'theme/typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import EChartsReactCore from 'echarts-for-react/lib/core';

interface LegendsProps {
  chartRef: React.RefObject<EChartsReactCore>;
  sm?: boolean; // check smaller screen or not
}

const StackedBarChartLegends = ({ chartRef, sm }: LegendsProps) => {
  const [toggleColor, setToggleColor] = useState({
    currentClients: true,
    subscribers: true,
    newCustomers: true,
  });

  const handleLegendClick = (seriesName: string) => {
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
              : data.series.find((s) => s.name === seriesName)?.data || [],
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
      justifyContent={sm ? 'center' : 'flex-start'}
      spacing={2}
      pt={sm ? 3 : 0}
      sx={{ width: sm ? 1 : 'auto' }}
    >
      <ButtonBase onClick={() => handleLegendClick('Current clients')} disableRipple>
        <Stack spacing={0.5} alignItems="center">
          <Box
            sx={{
              height: 8,
              width: 8,
              bgcolor: toggleColor.currentClients ? 'primary.main' : 'text.secondary',
              borderRadius: 1,
            }}
          ></Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontFamily: fontFamily.workSans }}
          >
            Current clients
          </Typography>
        </Stack>
      </ButtonBase>

      <ButtonBase onClick={() => handleLegendClick('Subscribers')} disableRipple>
        <Stack spacing={0.5} alignItems="center">
          <Box
            sx={{
              height: 8,
              width: 8,
              bgcolor: toggleColor.subscribers ? 'secondary.lighter' : 'text.secondary',
              borderRadius: 1,
            }}
          ></Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontFamily: fontFamily.workSans }}
          >
            Subscribers
          </Typography>
        </Stack>
      </ButtonBase>

      <ButtonBase onClick={() => handleLegendClick('New customers')} disableRipple>
        <Stack spacing={0.5} alignItems="center">
          <Box
            sx={{
              height: 8,
              width: 8,
              bgcolor: toggleColor.newCustomers ? 'secondary.light' : 'text.secondary',
              borderRadius: 1,
            }}
          ></Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontFamily: fontFamily.workSans }}
          >
            New customers
          </Typography>
        </Stack>
      </ButtonBase>
    </Stack>
  );
};

export default StackedBarChartLegends;
