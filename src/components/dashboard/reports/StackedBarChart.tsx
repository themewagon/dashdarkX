import ReactECharts from 'echarts-for-react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import RateChip from 'components/chips/RateChip';
import DateSelect from 'components/dates/DateSelect';
import { getChartsOptions } from './getChartsOptions';
import { ButtonBase } from '@mui/material';
import { useRef } from 'react';

export const data = {
  categories: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
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

const StackedBarChart = () => {
  const option = getChartsOptions({chartType: 'stacked-bar-chart'});
  const chartRef = useRef<ReactECharts>(null);

  function toggleSeries(seriesName: string) {
    const echartsInstance = chartRef.current?.getEchartsInstance();
    if (!echartsInstance) return;

    const option = echartsInstance.getOption() as echarts.EChartsOption;

    if (Array.isArray(option.series)) {
      const series = option.series.map((s) => {
        if (s.name === seriesName && s.type === 'bar') {
          const isCurrentlyVisible = (s.data as number[]).some(value => value !== 0);
          return {
            ...s,
            data: isCurrentlyVisible ? (s.data as number[]).map(() => 0) : data.series.find(serie => serie.name === seriesName)?.data || [],
          };
        }
        return s;
      });

      echartsInstance.setOption({ series });
    }
  }

  return (
    <Box component={Paper} sx={{ height: 500 }}>
      <Typography variant="subtitle1" color="text.secondary">
        Revenue by customer type
      </Typography>

      <Stack justifyContent="space-between" mt={1}>
        <Stack alignItems="center" gap={0.8}>
          <Typography variant="h4" sx={{ fontWeight: 600, letterSpacing: 1 }}>
            $240.8K
          </Typography>
          <RateChip rate={'14.8%'} isPositive={true} />
        </Stack>

        <Stack spacing={2}>
          <ButtonBase onClick={() => toggleSeries('Current clients')} disableRipple>
            <Stack spacing={0.5} alignItems="center">
              <Box sx={{ height: 8, width: 8, bgcolor: 'primary.main', borderRadius: 1 }}></Box>
              <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Work Sans' }}>
                Current clients
              </Typography>
            </Stack>
          </ButtonBase>

          <ButtonBase onClick={() => toggleSeries('Subscribers')} disableRipple>
            <Stack spacing={0.5} alignItems="center">
              <Box sx={{ height: 8, width: 8, bgcolor: 'info.light', borderRadius: 1 }}></Box>
              <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Work Sans' }}>
                Subscribers
              </Typography>
            </Stack>
          </ButtonBase>

          <ButtonBase onClick={() => toggleSeries('New customers')} disableRipple>
            <Stack spacing={0.5} alignItems="center">
              <Box sx={{ height: 8, width: 8, bgcolor: 'secondary.light', borderRadius: 1 }}></Box>
              <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Work Sans' }}>
                New customers
              </Typography>
            </Stack>
          </ButtonBase>
          <DateSelect />
        </Stack>
      </Stack>

      <ReactECharts ref={chartRef} option={option} style={{ height: '400px' }} />
    </Box>
  );
};

export default StackedBarChart;
