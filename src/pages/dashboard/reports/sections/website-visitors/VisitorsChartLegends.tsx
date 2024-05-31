import Stack from '@mui/material/Stack';
import VisitorsChartLegend from './components/VisitorsChartLegend';

interface LegendsProps {
  activeBar: string | null;
  setActiveBar: React.Dispatch<React.SetStateAction<string | null>>;
}

export const legendsData = [
  {
    id: 1,
    type: 'Organic',
    rate: '80%',
  },
  {
    id: 2,
    type: 'Social',
    rate: '60%',
  },
  {
    id: 3,
    type: 'Direct',
    rate: '50%',
  },
];

const VisitorsChartLegends = ({ activeBar, setActiveBar }: LegendsProps) => {
  const handleToggleLegend = (e: React.MouseEvent<HTMLButtonElement>, type: string) => {
    e.stopPropagation();
    setActiveBar(type);
  };

  return (
    <Stack mt={-1} spacing={3} direction="column">
      {legendsData.map((item) => (
        <VisitorsChartLegend
          key={item.id}
          data={item}
          activeBar={activeBar}
          handleToggleLegend={handleToggleLegend}
        />
      ))}
    </Stack>
  );
};

export default VisitorsChartLegends;
