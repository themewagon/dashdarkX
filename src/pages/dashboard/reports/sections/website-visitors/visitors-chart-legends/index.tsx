import Stack from '@mui/material/Stack';
import VisitorsChartLegend from './VisitorsChartLegend';
import { legendsData } from './legendsData';

interface LegendsProps {
  activeBar: string | null;
  setActiveBar: React.Dispatch<React.SetStateAction<string | null>>;
}

const VisitorsChartLegends = ({ activeBar, setActiveBar }: LegendsProps) => {
  const handleToggleLegend = (e: React.MouseEvent<HTMLButtonElement>, type: string) => {
    e.stopPropagation();
    setActiveBar(type);
  };

  return (
    <Stack mt={-1} spacing={3} direction="column">
      {legendsData.map((data) => (
        <VisitorsChartLegend
          key={data.id}
          data={data}
          activeBar={activeBar}
          handleToggleLegend={handleToggleLegend}
        />
      ))}
    </Stack>
  );
};

export default VisitorsChartLegends;
