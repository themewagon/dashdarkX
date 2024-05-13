import Chip from '@mui/material/Chip';
import IconifyIcon from 'components/base/IconifyIcon';

interface rateChipProps {
  rate: string;
  isPositive: boolean;
}

const RateChip = ({ rate, isPositive }: rateChipProps) => {
  return (
    <Chip
      variant="outlined"
      size="small"
      icon={
        isPositive ? (
          <IconifyIcon
            icon="mingcute:arrow-right-up-line"
            sx={{ m: '0 !important', color: '#14CA74 !important', width: 14 }}
          />
        ) : (
          <IconifyIcon
            icon="mingcute:arrow-right-down-line"
            sx={{ m: '0 !important', color: '#FF5A65 !important', width: 14 }}
          />
        )
      }
      label={rate}
      sx={(theme) => ({
        flexDirection: 'row-reverse',
        color: isPositive ? '#14CA74' : '#FF5A65',
        bgcolor: isPositive ? '#05C16833' : '#FF5A6533',
        borderColor: isPositive ? '#05C16833' : '#FF5A6533',
        '& .MuiChip-labelSmall': { p: theme.spacing(0.2, 0.5, 0, 0.25) },
      })}
    />
  );
};

export default RateChip;
