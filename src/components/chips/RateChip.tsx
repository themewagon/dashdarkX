import { useTheme } from '@mui/material';
import Chip from '@mui/material/Chip';
import IconifyIcon from 'components/base/IconifyIcon';

interface rateChipProps {
  rate: string;
  isUp: boolean;
}

const RateChip = ({ rate, isUp }: rateChipProps) => {
  const theme = useTheme();

  const colors = {
    red: theme.palette.error.main,
    green: theme.palette.success.main,
    yellow: theme.palette.warning.main,
    transRed: theme.palette.transparent.error.main,
    transGreen: theme.palette.transparent.success.main,
    transYellow: theme.palette.transparent.warning.main,
  };

  return (
    <Chip
      variant="outlined"
      size="small"
      icon={
        isUp ? (
          <IconifyIcon
            icon="mingcute:arrow-right-up-line"
            sx={{ color: `${colors.green} !important` }}
          />
        ) : (
          <IconifyIcon
            icon="mingcute:arrow-right-down-line"
            sx={{ color: `${colors.red} !important` }}
          />
        )
      }
      label={rate}
      sx={{
        px: 0.5,
        width: 62,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        color: isUp ? colors.green : colors.red,
        bgcolor: isUp ? colors.transGreen : colors.transRed,
        borderColor: isUp ? colors.transGreen : colors.transRed,
      }}
    />
  );
};

export default RateChip;
