import ReactECharts from 'echarts-for-react';
import { graphic } from 'echarts';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import RateChip from 'components/chips/RateChip';
import DateSelect from 'components/dates/DateSelect';
import IconifyIcon from 'components/base/IconifyIcon';

const LineChart = () => {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none', // Show tooltip for each axis
      },
    },
    grid: {
      top: 30,
      bottom: 70,
      left: 30,
      right: 0,
    },
    xAxis: {
      type: 'category',
      data: ['Jan1', 'Jan8', 'Jan16', 'Jan24', 'Jan31', 'Feb1', 'Feb8', 'Feb16', 'Feb24'],
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        color: '#AEB9E1',
        fontSize: '12px',
        margin: 10,
        fontFamily: 'Questrial',
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: '#AEB9E1',
        fontSize: '12px',
        fontFamily: 'Questrial',
      },
      splitLine: {
        show: false,
      },
      interval: 100,
      max: 300,
    },
    series: [
      {
        data: [0, 130, 130, 300, 90, 220, 180, 240, 90],
        type: 'line',
        showSymbol: false,
        lineStyle: {
          color: '#00C2FF',
          width: 1.2,
        },
        areaStyle: {
          // Define gradient for the area shadow
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(0, 194, 255, 0.2)',
            },
            {
              offset: 1,
              color: 'rgba(0, 194, 255, 0)',
            },
          ]),
        },
      },
    ],
  };

  return (
    <Box component={Paper} sx={{ height: 300 }}>
      <Stack alignItems="center" spacing={0.6}>
        <IconifyIcon icon="ph:clock-fill" sx={{ color: 'text.secondary', fontSize: '1.1rem' }} />
        <Typography variant="body2" color="text.secondary">
          Completed tasks over time
        </Typography>
      </Stack>

      <Stack justifyContent="space-between" mt={1.4}>
        <Stack alignItems="center" gap={0.8}>
          <Typography variant="h4" sx={{ fontWeight: 600, letterSpacing: 1 }}>
            257
          </Typography>
          <RateChip rate={'16.8%'} isPositive={true} />
        </Stack>

        <DateSelect />
      </Stack>

      <ReactECharts option={option} style={{ height: '220px' }} />
    </Box>
  );
};

export default LineChart;
