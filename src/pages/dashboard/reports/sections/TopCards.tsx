import { Grid } from '@mui/material';
import ReportsCard from 'components/dashboard/reports/ReportsCard';

const cardsData = [
  {
    title: 'Save Products',
    value: '50.8K',
    rate: '28.4%',
    isPositive: true,
    icon: 'carbon:favorite-filled',
  },
  {
    title: 'Stock Products',
    value: '23.6K',
    rate: '12.6%',
    isPositive: false,
    icon: 'solar:bag-bold',
  },
  {
    title: 'Sale Products',
    value: '756',
    rate: '3.1%',
    isPositive: true,
    icon: 'ph:bag-simple-fill',
  },
  {
    title: 'Average Revenue',
    value: '2.3K',
    rate: '11.3%',
    isPositive: true,
    icon: 'mingcute:currency-dollar-2-line',
  },
];

const TopCards = () => {
  return (
    <Grid container spacing={{xs: 2.5, sm: 3, lg: 3.75}}>
      {cardsData.map((item, index) => {
        return (
          <Grid item xs={12} sm={6} xl={3} key={index}>
            <ReportsCard
              title={item.title}
              value={item.value}
              rate={item.rate}
              isPositive={item.isPositive}
              icon={item.icon}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default TopCards;
