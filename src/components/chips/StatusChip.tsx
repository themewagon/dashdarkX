import { useTheme } from '@mui/material';
import Chip from '@mui/material/Chip';
import IconifyIcon from 'components/base/IconifyIcon';

interface statusChipProps {
  status: 'delivered' | 'canceled' | 'pending';
}

const StatusChip = ({ status }: statusChipProps) => {
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
        <IconifyIcon
          icon="radix-icons:dot-filled"
          sx={{
            color:
              status === 'delivered'
                ? `${colors.green} !important`
                : status === 'pending'
                  ? `${colors.yellow} !important`
                  : `${colors.red} !important`,
          }}
        />
      }
      label={status}
      sx={{
        pr: 0.65,
        width: 80,
        justifyContent: 'center',
        color:
          status === 'delivered' ? colors.green : status === 'pending' ? colors.yellow : colors.red,
        letterSpacing: 0.5,
        bgcolor:
          status === 'delivered'
            ? colors.transGreen
            : status === 'pending'
              ? colors.transYellow
              : colors.transRed,
        borderColor:
          status === 'delivered'
            ? colors.transGreen
            : status === 'pending'
              ? colors.transYellow
              : colors.transRed,
      }}
    />
  );
};

export default StatusChip;
