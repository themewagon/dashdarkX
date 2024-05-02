import ReactECharts from 'echarts-for-react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const BarChart = () => {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      top: '8%',
      left: '1%',
      right: '4%',
      bottom: '13%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisTick: {
          show: false,
          alignWithLabel: true,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          color: '#A0AEC0',
          fontSize: '12px',
          fontWeight: 700,
          margin: 28,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        interval: 10,
        max: 30,
        axisLabel: {
          color: '#A0AEC0',
          fontSize: '12px',
          fontWeight: 700,
          margin: 16,
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            width: 1,
            color: '#E2E8F0',
          },
        },
      },
    ],
    series: [
      {
        name: 'Sales',
        type: 'bar',
        barWidth: '14%',
        itemStyle: {
          color: '#ED8936',
          borderRadius: [50, 50, 50, 50],
        },
        data: [24, 20, 30, 22, 18, 29],
      },
    ],
  };

  return (
    <Box component={Paper} sx={{ height: 490 }}>
      <Typography variant="caption" color="grey.400" gutterBottom>
        PERFORMANCE
      </Typography>
      <Typography variant="h6" color="grey.700">
        Total orders
      </Typography>
      <ReactECharts
        option={option}
        notMerge={true}
        lazyUpdate={true}
        style={{ height: '100%', width: '100%' }}
      />
    </Box>
  );
};

export default BarChart;
