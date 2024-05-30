import { fontFamily } from 'theme/typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

interface LegendProps {
  data: {
    id: number;
    type: string;
    rate: string;
  };
  activeBar: string | null;
  handleToggleLegend: (e: React.MouseEvent<HTMLButtonElement>, type: string) => void;
}

const VisitorsChartLegend = ({ data, activeBar, handleToggleLegend }: LegendProps) => {
  let color = '';

  if (activeBar === data.type) {
    if (activeBar === 'Organic') {
      color = 'primary.main';
    } else if (activeBar === 'Social') {
      color = 'secondary.lighter';
    } else if (activeBar === 'Direct') {
      color = 'secondary.light';
    }
  } else if (activeBar === null) {
    if (data.type === 'Organic') {
      color = 'primary.main';
    } else if (data.type === 'Social') {
      color = 'secondary.lighter';
    } else if (data.type === 'Direct') {
      color = 'secondary.light';
    }
  } else {
    color = 'text.secondary';
  }

  return (
    <Stack alignItems="center" justifyContent="space-between">
      <ButtonBase onClick={(e) => handleToggleLegend(e, data.type)} disableRipple>
        <Stack spacing={1} alignItems="center">
          <Box
            sx={{
              height: 8,
              width: 8,
              bgcolor: color,
              borderRadius: 1,
            }}
          ></Box>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontFamily: fontFamily.workSans }}
          >
            {data.type}
          </Typography>
        </Stack>
      </ButtonBase>
      <Typography variant="body1" color="text.primary" sx={{ fontFamily: fontFamily.workSans }}>
        80%
      </Typography>
    </Stack>
  );
};

export default VisitorsChartLegend;
