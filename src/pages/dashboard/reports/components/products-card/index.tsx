import { fontFamily } from 'theme/typography';
import { Paper } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ProductInfo from './ProductInfo';
import iPhone from 'assets/images/iPhone.png';
import AWS8 from 'assets/images/AWS8.png';

const ProductsCard = () => {
  return (
    <Stack direction="column" gap={3.75} component={Paper} sx={{ height: 300 }}>
      <Typography
        variant="h6"
        sx={(theme) => ({
          fontWeight: theme.typography.subtitle1.fontWeight,
          fontFamily: fontFamily.workSans,
        })}
      >
        Products
      </Typography>

      <Stack justifyContent="space-between">
        <Typography
          variant="caption"
          sx={(theme) => ({ fontWeight: theme.typography.body1.fontWeight })}
        >
          Products
        </Typography>
        <Typography
          variant="caption"
          sx={(theme) => ({ fontWeight: theme.typography.body1.fontWeight })}
        >
          Price
        </Typography>
      </Stack>

      <ProductInfo imageUrl={iPhone} name="iPhone 14 Pro Max" inStock={524} price="1,099.00" />
      <ProductInfo imageUrl={AWS8} name="Apple Watch S8" inStock={320} price="799.00" />
    </Stack>
  );
};

export default ProductsCard;
