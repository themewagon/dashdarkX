// import ReactEchart from 'components/base/ReactEchart';
import ReactECharts from 'echarts-for-react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import getLineChartOptions from './getLineChartOptions';

const LineChart = () => {
  const option = getLineChartOptions();

  return (
    <Box component={Paper} sx={{ height: 490 }}>
      <Typography
        variant="h6"
        sx={{
          background: 'linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        gutterBottom
      >
        Sales overview
      </Typography>
      <Typography variant="subtitle2" component="p" color="grey.700">
        <Typography
          variant="subtitle2"
          component="span"
          sx={(theme) => ({ color: theme.palette.success.light, fontWeight: 700 })}
        >
          (+5) more
        </Typography>{' '}
        in 2021
      </Typography>
      <ReactECharts
        option={option}
        // notMerge={true}
        // lazyUpdate={true}
        style={{ height: '100%', width: '100%' }}
      />
    </Box>
  );
};

export default LineChart;
