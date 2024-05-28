import { useRef } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import RateChip from 'components/chips/RateChip';
import DateSelect from 'components/dates/DateSelect';
import EChartsReactCore from 'echarts-for-react/lib/core';
import StackedBarChartLegends from './StackedBarChartLegends';
import GetBarChartWithOption from './GetBarChartWithOption';

const StackedBarChart = () => {
  const chartRef = useRef<EChartsReactCore>(null);

  return (
    <Box component={Paper} sx={{ height: { xs: 540, md: 500 } }}>
      {/* header */}
      <Typography variant="subtitle1" color="text.secondary">
        Revenue by customer type
      </Typography>

      {/* subheader */}
      <Stack justifyContent="space-between" mt={1}>
        <Stack alignItems="center" gap={0.8}>
          <Typography
            variant="h4"
            sx={(theme) => ({ fontWeight: theme.typography.caption.fontWeight, letterSpacing: 1 })}
          >
            $240.8K
          </Typography>
          <RateChip rate={'14.8%'} isUp={true} />
        </Stack>

        <Stack alignItems="center" spacing={2}>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <StackedBarChartLegends chartRef={chartRef} sm={false} />
          </Box>
          <DateSelect />
        </Stack>
      </Stack>

      {/* legends for smaller screen */}
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <StackedBarChartLegends chartRef={chartRef} sm={true} />
      </Box>

      {/* stacked bar chart */}
      <Box sx={{ height: 400 }}>
        <GetBarChartWithOption chartRef={chartRef} />
      </Box>
    </Box>
  );
};

export default StackedBarChart;
