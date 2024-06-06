import { useTheme } from '@mui/material';
import Chip from '@mui/material/Chip';
import IconifyIcon from 'components/base/IconifyIcon';

interface RateChipProps {
  rate: string;
  isUp: boolean;
}

const RateChip = ({ rate, isUp }: RateChipProps) => {
  const theme = useTheme();

  return (
    <Chip
      variant="outlined"
      size="small"
      icon={
        isUp ? (
          <IconifyIcon
            icon="mingcute:arrow-right-up-line"
            sx={{ color: `${theme.palette.success.main} !important` }}
          />
        ) : (
          <IconifyIcon
            icon="mingcute:arrow-right-down-line"
            sx={{ color: `${theme.palette.error.main} !important` }}
          />
        )
      }
      label={rate}
      sx={{
        px: 0.5,
        width: 62,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        color: isUp ? theme.palette.success.main : theme.palette.error.main,
        bgcolor: isUp
          ? theme.palette.transparent.success.main
          : theme.palette.transparent.error.main,
        borderColor: isUp
          ? theme.palette.transparent.success.main
          : theme.palette.transparent.error.main,
      }}
    />
  );
};

export default RateChip;
