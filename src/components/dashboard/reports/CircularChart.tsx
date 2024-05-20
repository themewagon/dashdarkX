import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';
import ButtonBase from '@mui/material/ButtonBase';
import ReactECharts from 'echarts-for-react';
import { getCircularChartOption } from './functions/getCricularChartOption';

const CircularChart = () => {
  const [activeBarIndex, setActiveBarIndex] = useState<number | null>(null);
  const option = getCircularChartOption({ activeBarIndex });

  const handleLegendClick = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
    e.stopPropagation();
    setActiveBarIndex(index);
  };

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

      <Stack mt={-1} spacing={3} direction="column">
        <Stack alignItems="center" justifyContent="space-between">
          <ButtonBase onClick={(e) => handleLegendClick(e, 2)} disableRipple>
            <Stack spacing={1} alignItems="center">
              <Box sx={{ height: 8, width: 8, bgcolor: 'primary.main', borderRadius: 1 }}></Box>
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Work Sans' }}>
                Organic
              </Typography>
            </Stack>
          </ButtonBase>
          <Typography variant="body1" color="text.primary" sx={{ fontFamily: 'Work Sans' }}>
            80%
          </Typography>
        </Stack>
        <Stack alignItems="center" justifyContent="space-between">
          <ButtonBase onClick={(e) => handleLegendClick(e, 1)} disableRipple>
            <Stack spacing={1} alignItems="center">
              <Box
                sx={{ height: 8, width: 8, bgcolor: 'secondary.lighter', borderRadius: 1 }}
              ></Box>
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Work Sans' }}>
                Social
              </Typography>
            </Stack>
          </ButtonBase>
          <Typography variant="body1" color="text.primary" sx={{ fontFamily: 'Work Sans' }}>
            60%
          </Typography>
        </Stack>
        <Stack alignItems="center" justifyContent="space-between">
          <ButtonBase onClick={(e) => handleLegendClick(e, 0)} disableRipple>
            <Stack spacing={1} alignItems="center">
              <Box sx={{ height: 8, width: 8, bgcolor: 'secondary.light', borderRadius: 1 }}></Box>
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Work Sans' }}>
                Direct
              </Typography>
            </Stack>
          </ButtonBase>
          <Typography variant="body1" color="text.primary" sx={{ fontFamily: 'Work Sans' }}>
            50%
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CircularChart;
