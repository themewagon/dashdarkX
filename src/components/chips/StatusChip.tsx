import Chip from '@mui/material/Chip';
import IconifyIcon from 'components/base/IconifyIcon';

interface statusChipProps {
  status: 'Delivered' | 'Canceled' | 'Pending';
}

const StatusChip = ({ status }: statusChipProps) => {
    console.log(status)
  return (
    <Chip
      variant="outlined"
      size="small"
      icon={
        <IconifyIcon
          icon="radix-icons:dot-filled"
          sx={{
            m: '0 !important',
            width: 14,
            color:
              status === 'Delivered'
                ? '#14CA74 !important'
                : status === 'Pending'
                  ? '#FDB52A !important'
                  : '#FF5A65 !important',
          }}
        />
      }
      label={status}
      sx={() => ({
        width: 90,
        justifyContent: 'center',
        color: status === 'Delivered' ? '#14CA74' : status === 'Pending' ? '#FDB52A' : '#FF5A65',
        fontSize: '0.875rem',
        fontWeight: 500,
        letterSpacing: 0.5,
        bgcolor: status === 'Delivered' ? '#05C16833' : status === 'Pending' ? '#FFB01633'
:'#FF5A6533',
        borderColor: status === 'Delivered' ? '#05C16833' : status === 'Pending' ? '#FFB01633' : '#FF5A6533',
        '& .MuiChip-labelSmall': {
          pl: 0,
          pt: 0.2,
        },
      })}
    />
  );
};

export default StatusChip;
