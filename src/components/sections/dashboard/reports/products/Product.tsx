import { fontFamily } from 'theme/typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'components/base/Image';

interface ProductInfoProps {
  data: {
    imageUrl: string;
    name: string;
    inStock: number | string;
    price: number | string;
  };
}

const Product = ({ data }: ProductInfoProps) => {
  const { imageUrl, name, inStock, price } = data;
  return (
    <Stack alignItems="center" justifyContent="space-between">
      <Stack spacing={2} alignItems="center">
        <Box sx={{ height: 46, width: 46, bgcolor: 'info.dark', borderRadius: 1.25 }}>
          <Image src={imageUrl} sx={{ height: 1, width: 1, objectFit: 'contain' }} />
        </Box>

        <Stack direction="column">
          <Typography
            variant="body2"
            sx={(theme) => ({
              fontWeight: theme.typography.caption.fontWeight,
            })}
          >
            {name}
          </Typography>
          <Typography
            variant="caption"
            sx={(theme) => ({
              color: 'text.secondary',
              fontWeight: theme.typography.subtitle2.fontWeight,
            })}
          >
            {inStock} in stock
          </Typography>
        </Stack>
      </Stack>

      <Typography
        variant="caption"
        sx={(theme) => ({
          fontFamily: fontFamily.workSans,
          fontWeight: theme.typography.subtitle1.fontWeight,
        })}
      >
        $ {price}
      </Typography>
    </Stack>
  );
};

export default Product;
