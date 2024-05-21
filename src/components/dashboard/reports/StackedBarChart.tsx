import { useRef } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import DateSelect from 'components/dates/DateSelect';
import RateChip from 'components/chips/RateChip';
import ReactECharts from 'echarts-for-react';
import { getStackedBarChartOption } from './functions/getStackedBarChartOption';
import StackedBarChartLegends from './legends/StackedBarChartLegends';

const StackedBarChart = () => {
  const option = getStackedBarChartOption();
  const chartRef = useRef<ReactECharts>(null);

  return (
    <Box component={Paper} sx={{ height: {xs: 540, md: 500} }}>
      <Typography variant="subtitle1" color="text.secondary">
        Revenue by customer type
      </Typography>

      <Stack justifyContent="space-between" mt={1}>
        <Stack alignItems="center" gap={0.8}>
          <Typography
            variant="h4"
            sx={(theme) => ({ fontWeight: theme.typography.caption.fontWeight, letterSpacing: 1 })}
          >
            $240.8K
          </Typography>
          <RateChip rate={'14.8%'} isPositive={true} />
        </Stack>

        <Stack alignItems="center" spacing={2}>
          <Box sx={{display: {xs: 'none', md: 'block'}}}>
            <StackedBarChartLegends chartRef={chartRef} sm={false}/>
          </Box>
          <DateSelect />
        </Stack>
      </Stack>

      <Box sx={{display: {xs: 'block', md: 'none'}}}>
        <StackedBarChartLegends chartRef={chartRef} sm={true}/>
      </Box>

      <ReactECharts ref={chartRef} option={option} style={{ height: '400px' }} />
    </Box>
  );
};

export default StackedBarChart;
