import ReactECharts from 'echarts-for-react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconifyIcon from 'components/base/IconifyIcon';

const CircularChart = () => {
  const option = {
    polar: {
      radius: [80, '75%'],
    },
    angleAxis: {
      max: 100,
      startAngle: 180,
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
    radiusAxis: {
      show: false,
      type: 'category',
      data: ['Direct', 'Social', 'Organic'],
    },
    tooltip: {},
    series: {
      type: 'bar',
      data: [
        { value: 50, itemStyle: { color: '#00C2FF' } },
        { value: 60, itemStyle: { color: '#0E43FB' } },
        { value: 80, itemStyle: { color: '#CB3CFF' } },
      ],
      coordinateSystem: 'polar',
      label: {
        show: false,
        position: 'middle',
        formatter: '{b}: {c}',
      },
      barCategoryGap: '35%',
    },
    graphic: [
      {
        type: 'text',
        left: 'center',
        top: 'middle',
        style: {
          text: '150k',
          fill: '#fff',
          fontSize: 28,
          fontWeight: 500,
          letterSpacing: 1,
          fontFamily: 'Work Sans',
        },
      },
    ],
  };

  return (
    <Box component={Paper} sx={{ height: 500 }}>
      <Stack alignItems="center" justifyContent="space-between" mb={-2}>
        <Typography
          variant="h6"
          sx={(theme) => ({
            fontWeight: theme.typography.subtitle1.fontWeight,
            fontFamily: 'Work Sans',
          })}
        >
          Website Visitors
        </Typography>
        <Button
          variant="contained"
          size="small"
          endIcon={<IconifyIcon icon="mingcute:arrow-down-line" />}
          sx={(theme) => ({
            zIndex: 1000,
            background: theme.palette.info.dark,
            '&:hover': { background: theme.palette.info.dark },
          })}
        >
          Export
        </Button>
      </Stack>

      <ReactECharts option={option} notMerge={true} lazyUpdate={true} />

      <Stack mt={-1} spacing={3} direction="column">
        <Stack alignItems="center" justifyContent="space-between">
          <Stack spacing={1} alignItems="center">
            <Box sx={{ height: 8, width: 8, bgcolor: 'primary.main', borderRadius: 1 }}></Box>
            <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Work Sans' }}>
              Organic
            </Typography>
          </Stack>
          <Typography variant="body1" color="text.primary" sx={{ fontFamily: 'Work Sans' }}>
            80%
          </Typography>
        </Stack>
        <Stack alignItems="center" justifyContent="space-between">
          <Stack spacing={1} alignItems="center">
            <Box sx={{ height: 8, width: 8, bgcolor: 'info.light', borderRadius: 1 }}></Box>
            <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Work Sans' }}>
              Social
            </Typography>
          </Stack>
          <Typography variant="body1" color="text.primary" sx={{ fontFamily: 'Work Sans' }}>
            60%
          </Typography>
        </Stack>
        <Stack alignItems="center" justifyContent="space-between">
          <Stack spacing={1} alignItems="center">
            <Box sx={{ height: 8, width: 8, bgcolor: 'secondary.light', borderRadius: 1 }}></Box>
            <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Work Sans' }}>
              Direct
            </Typography>
          </Stack>
          <Typography variant="body1" color="text.primary" sx={{ fontFamily: 'Work Sans' }}>
            50%
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CircularChart;
