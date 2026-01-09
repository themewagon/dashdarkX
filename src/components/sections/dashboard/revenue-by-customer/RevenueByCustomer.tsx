import { useRef } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import RateChip from 'components/common/RateChip';
import DateSelect from 'components/common/DateSelect';
import EChartsReactCore from 'echarts-for-react/lib/core';
import RevenueChartLegends from './RevenueChartLegends';
import RevenueChart from './RevenueChart';
import { revenueByCustomerData } from 'data/revenueData';

const RevenueByCustomer = () => {
  const chartRef = useRef<EChartsReactCore>(null);

  return (
    <Paper sx={{ height: { xs: 540, md: 500 } }}>
      <Typography variant="subtitle1" color="text.secondary">
        Revenue by customer type
      </Typography>

      <Stack alignItems={{ xs: 'flex-start', sm: 'center' }} justifyContent="space-between" mt={1}>
        <Stack flexWrap="wrap" alignItems="center" gap={0.875}>
          <Typography variant="h3" fontWeight={600} letterSpacing={1}>
            $240.8K
          </Typography>
          <RateChip rate={'14.8%'} isUp={true} />
        </Stack>

        <Stack alignItems="center" spacing={2}>
          <Box display={{ xs: 'none', md: 'block' }}>
            <RevenueChartLegends chartRef={chartRef} isSm={false} />
          </Box>
          <DateSelect />
        </Stack>
      </Stack>

      <Box display={{ xs: 'block', md: 'none' }}>
        <RevenueChartLegends chartRef={chartRef} isSm={true} />
      </Box>

      <RevenueChart
        chartRef={chartRef}
        data={revenueByCustomerData}
        sx={{ height: { xs: '380px !important', sm: '400px !important' } }}
      />
    </Paper>
  );
};

export default RevenueByCustomer;
