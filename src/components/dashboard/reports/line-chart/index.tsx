import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import RateChip from 'components/chips/RateChip';
import DateSelect from 'components/dates/DateSelect';
import IconifyIcon from 'components/base/IconifyIcon';
import GetLineChartWithOption from './GetLineChartWithOption';

const LineChart = () => {
  return (
    <Box component={Paper} sx={{ height: 300 }}>
      {/* header */}
      <Stack alignItems="center" spacing={0.6}>
        <IconifyIcon
          icon="ph:clock-fill"
          sx={(theme) => ({ color: 'text.secondary', fontSize: theme.typography.h6.fontSize })}
        />
        <Typography variant="body2" color="text.secondary">
          Completed tasks over time
        </Typography>
      </Stack>

      <Stack justifyContent="space-between" mt={1.4}>
        <Stack alignItems="center" gap={0.875}>
          <Typography
            variant="h3"
            sx={(theme) => ({ fontWeight: theme.typography.caption.fontWeight, letterSpacing: 1 })}
          >
            257
          </Typography>
          <RateChip rate={'16.8%'} isUp={true} />
        </Stack>

        <DateSelect />
      </Stack>

      {/* line chart */}
      <Box sx={{ height: 220 }}>
        <GetLineChartWithOption />
      </Box>
    </Box>
  );
};

export default LineChart;
