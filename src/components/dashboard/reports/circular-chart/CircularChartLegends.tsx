import { fontFamily } from 'theme/typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

interface LegendsProps {
  activeBarIndex: number | null;
  setActiveBarIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const CircularChartLegends = ({ activeBarIndex, setActiveBarIndex }: LegendsProps) => {
  const handleLegendClick = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
    e.stopPropagation();
    setActiveBarIndex(index);
  };

  return (
    <Stack mt={-1} spacing={3} direction="column">
      <Stack alignItems="center" justifyContent="space-between">
        <ButtonBase onClick={(e) => handleLegendClick(e, 2)} disableRipple>
          <Stack spacing={1} alignItems="center">
            <Box
              sx={{
                height: 8,
                width: 8,
                bgcolor:
                  activeBarIndex === 2 || activeBarIndex === null
                    ? 'primary.main'
                    : 'text.secondary',
                borderRadius: 1,
              }}
            ></Box>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontFamily: fontFamily.workSans }}
            >
              Organic
            </Typography>
          </Stack>
        </ButtonBase>
        <Typography variant="body1" color="text.primary" sx={{ fontFamily: fontFamily.workSans }}>
          80%
        </Typography>
      </Stack>
      <Stack alignItems="center" justifyContent="space-between">
        <ButtonBase onClick={(e) => handleLegendClick(e, 1)} disableRipple>
          <Stack spacing={1} alignItems="center">
            <Box
              sx={{
                height: 8,
                width: 8,
                bgcolor:
                  activeBarIndex === 1 || activeBarIndex === null
                    ? 'secondary.lighter'
                    : 'text.secondary',
                borderRadius: 1,
              }}
            ></Box>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontFamily: fontFamily.workSans }}
            >
              Social
            </Typography>
          </Stack>
        </ButtonBase>
        <Typography variant="body1" color="text.primary" sx={{ fontFamily: fontFamily.workSans }}>
          60%
        </Typography>
      </Stack>
      <Stack alignItems="center" justifyContent="space-between">
        <ButtonBase onClick={(e) => handleLegendClick(e, 0)} disableRipple>
          <Stack spacing={1} alignItems="center">
            <Box
              sx={{
                height: 8,
                width: 8,
                bgcolor:
                  activeBarIndex === 0 || activeBarIndex === null
                    ? 'secondary.light'
                    : 'text.secondary',
                borderRadius: 1,
              }}
            ></Box>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontFamily: fontFamily.workSans }}
            >
              Direct
            </Typography>
          </Stack>
        </ButtonBase>
        <Typography variant="body1" color="text.primary" sx={{ fontFamily: fontFamily.workSans }}>
          50%
        </Typography>
      </Stack>
    </Stack>
  );
};

export default CircularChartLegends;
