import { useRef } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import DateSelect from 'components/dates/DateSelect';
import RateChip from 'components/chips/RateChip';
import ReactECharts from 'echarts-for-react';
import { getStackedBarChartOption } from './functions/getStackedBarChartOption';
import { data } from './functions/getStackedBarChartOption';

const StackedBarChart = () => {
  const option = getStackedBarChartOption();
  const chartRef = useRef<ReactECharts>(null);

  const handleLegendClick = (seriesName: string) => {
    const echartsInstance = chartRef.current?.getEchartsInstance();
    if (!echartsInstance) return;

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
          <ButtonBase onClick={() => handleLegendClick('Current clients')} disableRipple>
            <Stack spacing={0.5} alignItems="center">
              <Box sx={{ height: 8, width: 8, bgcolor: 'primary.main', borderRadius: 1 }}></Box>
              <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Work Sans' }}>
                Current clients
              </Typography>
            </Stack>
          </ButtonBase>

          <ButtonBase onClick={() => handleLegendClick('Subscribers')} disableRipple>
            <Stack spacing={0.5} alignItems="center">
              <Box
                sx={{ height: 8, width: 8, bgcolor: 'secondary.lighter', borderRadius: 1 }}
              ></Box>
              <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Work Sans' }}>
                Subscribers
              </Typography>
            </Stack>
          </ButtonBase>

          <ButtonBase onClick={() => handleLegendClick('New customers')} disableRipple>
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
