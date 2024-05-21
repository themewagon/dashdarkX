import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReactECharts from 'echarts-for-react';
import IconifyIcon from 'components/base/IconifyIcon';
import { getCircularChartOption } from './functions/getCricularChartOption';
import CircularChartLegends from './legends/CircularChartLegends';

const CircularChart = () => {
  const [activeBarIndex, setActiveBarIndex] = useState<number | null>(null);
  const option = getCircularChartOption({ activeBarIndex });

  return (
    <Box component={Paper} onClick={() => setActiveBarIndex(null)} sx={{ height: 500 }}>
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

      <CircularChartLegends activeBarIndex={activeBarIndex} setActiveBarIndex={setActiveBarIndex}/>
    </Box>
  );
};

export default CircularChart;
