import { fontFamily } from 'theme/typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

interface LegendProps {
  data: {
    id: number;
    type: string;
  };
  toggleColor: {
    currentClients: boolean;
    subscribers: boolean;
    newCustomers: boolean;
  };
  handleLegendToggle: (seriesName: string) => void;
}

const RevenueChartLegend = ({ data, toggleColor, handleLegendToggle }: LegendProps) => {
  let color = '';

  if (data.type === 'Current clients' && toggleColor.currentClients) {
    color = 'primary.main';
  } else if (data.type === 'Subscribers' && toggleColor.subscribers) {
    color = 'secondary.lighter';
  } else if (data.type === 'New customers' && toggleColor.newCustomers) {
    color = 'secondary.light';
  } else {
    color = 'text.secondary';
  }

  return (
    <ButtonBase onClick={() => handleLegendToggle(data.type)} disableRipple>
      <Stack spacing={0.5} alignItems="center">
        <Box
          sx={{
            height: 8,
            width: 8,
            bgcolor: color,
            borderRadius: 1,
          }}
        ></Box>
        <Typography variant="body2" color="text.secondary" sx={{ fontFamily: fontFamily.workSans }}>
          {data.type}
        </Typography>
      </Stack>
    </ButtonBase>
  );
};

export default RevenueChartLegend;
