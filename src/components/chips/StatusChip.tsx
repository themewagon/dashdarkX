import { useTheme } from '@mui/material';
import Chip from '@mui/material/Chip';
import IconifyIcon from 'components/base/IconifyIcon';

interface StatusChipProps {
  status: 'delivered' | 'canceled' | 'pending';
}

const StatusChip = ({ status }: StatusChipProps) => {
  const theme = useTheme();

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
                ? `${theme.palette.success.main} !important`
                : status === 'pending'
                  ? `${theme.palette.warning.main} !important`
                  : `${theme.palette.error.main} !important`,
          }}
        />
      }
      label={status}
      sx={{
        pr: 0.65,
        width: 80,
        justifyContent: 'center',
        color:
          status === 'delivered'
            ? theme.palette.success.main
            : status === 'pending'
              ? theme.palette.warning.main
              : theme.palette.error.main,
        letterSpacing: 0.5,
        bgcolor:
          status === 'delivered'
            ? theme.palette.transparent.success.main
            : status === 'pending'
              ? theme.palette.transparent.warning.main
              : theme.palette.transparent.error.main,
        borderColor:
          status === 'delivered'
            ? theme.palette.transparent.success.main
            : status === 'pending'
              ? theme.palette.transparent.warning.main
              : theme.palette.transparent.error.main,
      }}
    />
  );
};

export default StatusChip;
