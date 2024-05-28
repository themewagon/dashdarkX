import { fontFamily } from 'theme/typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import IconifyIcon from 'components/base/IconifyIcon';
import RateChip from 'components/chips/RateChip';

interface firstCardProps {
  icon: string;
  title: string;
  value: string;
  rate: string;
  isUp: boolean;
}

const ReportsCard = (props: firstCardProps) => {
  const { icon, title, value, rate, isUp } = props;

  return (
    <Stack
      direction="column"
      component={Paper}
      gap={1.55}
      sx={{ p: 2.25, pl: 2.5, height: 116, width: 1 }}
    >
      <Stack justifyContent="space-between">
        <Stack alignItems="center" gap={1}>
          <IconifyIcon
            icon={icon}
            color="primary.main"
            sx={(theme) => ({ fontSize: theme.typography.h5.fontSize })}
          />
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ fontFamily: fontFamily.workSans }}
          >
            {title}
          </Typography>
        </Stack>
        <IconButton
          aria-label="menu"
          size="small"
          sx={(theme) => ({ color: 'neutral.light', fontSize: theme.typography.h5.fontSize })}
        >
          <IconifyIcon icon="solar:menu-dots-bold" />
        </IconButton>
      </Stack>

      <Stack alignItems="center" gap={0.85} sx={{ bgcolor: 'transparent' }}>
        <Typography
          variant="h3"
          sx={(theme) => ({
            fontWeight: theme.typography.caption.fontWeight,
            letterSpacing: 1,
          })}
        >
          {value}
        </Typography>
        <RateChip rate={rate} isUp={isUp} />
      </Stack>
    </Stack>
  );
};

export default ReportsCard;
