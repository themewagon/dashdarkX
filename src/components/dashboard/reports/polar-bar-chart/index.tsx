import { useState } from 'react';
import { fontFamily } from 'theme/typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';
import PolarBarChartLegends from './PolarBarChartLegends';
import GetPolarBarChartWithOption from './GetPolarBarChartWithOption';

const PolarBarChart = () => {
  const [activeBarIndex, setActiveBarIndex] = useState<number | null>(null);

  return (
    <Box component={Paper} onClick={() => setActiveBarIndex(null)} sx={{ height: 500 }}>
      {/* header */}
      <Stack alignItems="center" justifyContent="space-between" mb={-2}>
        <Typography
          variant="h6"
          sx={(theme) => ({
            fontWeight: theme.typography.subtitle1.fontWeight,
            fontFamily: fontFamily.workSans,
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

      {/* polar bar chart */}
      <GetPolarBarChartWithOption activeBarIndex={activeBarIndex} />

      {/* legends */}
      <PolarBarChartLegends activeBarIndex={activeBarIndex} setActiveBarIndex={setActiveBarIndex} />
    </Box>
  );
};

export default PolarBarChart;
