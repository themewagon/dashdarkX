export interface KPIProps {
  id: number | string;
  icon: string;
  title: string;
  value: string;
  rate: string;
  isUp: boolean;
}

export const kpiData: KPIProps[] = [
  {
    id: 1,
    title: 'Save Products',
    value: '50.8K',
    rate: '28.4%',
    isUp: true,
    icon: 'carbon:favorite-filled',
  },
  {
    id: 2,
    title: 'Stock Products',
    value: '23.6K',
    rate: '12.6%',
    isUp: false,
    icon: 'solar:bag-bold',
  },
  {
    id: 3,
    title: 'Sale Products',
    value: '756',
    rate: '3.1%',
    isUp: true,
    icon: 'ph:bag-simple-fill',
  },
  {
    id: 4,
    title: 'Average Revenue',
    value: '2.3K',
    rate: '11.3%',
    isUp: true,
    icon: 'mingcute:currency-dollar-2-line',
  },
];
