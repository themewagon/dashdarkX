import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'components/base/Image';
import iPhone from 'assets/images/iPhone.png';
import AWS8 from 'assets/images/AWS8.png';

const ProductsCard = () => {
  return (
    <Stack direction="column" gap={3.75} component={Paper} sx={{ height: 300 }}>
      <Typography
        variant="h6"
        sx={(theme) => ({
          fontWeight: theme.typography.subtitle1.fontWeight,
          fontFamily: 'Work Sans',
        })}
      >
        Products
      </Typography>

      <Stack justifyContent="space-between">
        <Typography variant="caption" sx={{ fontWeight: 400 }}>
          Products
        </Typography>
        <Typography variant="caption" sx={{ fontWeight: 400 }}>
          Price
        </Typography>
      </Stack>

      <Stack alignItems="center" justifyContent="space-between">
        <Stack spacing={2} alignItems="center">
          <Box sx={{ height: 46, width: 46, bgcolor: 'info.dark', borderRadius: 1.25 }}>
            <Image src={iPhone} sx={{ height: 1, width: 1, objectFit: 'contain' }} />
          </Box>

          <Stack direction="column">
            <Typography variant="body2" sx={{ fontWeight: 600, fontFamily: 'Work Sans' }}>
              iPhone 14 Pro Max
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
              524 in stock
            </Typography>
          </Stack>
        </Stack>

        <Typography variant="caption" sx={{ fontWeight: 500 }}>
          $ 1,099.00
        </Typography>
      </Stack>

      <Stack alignItems="center" justifyContent="space-between">
        <Stack spacing={2} alignItems="center">
          <Box sx={{ height: 46, width: 46, bgcolor: 'info.dark', borderRadius: 1.25 }}>
            <Image src={AWS8} sx={{ height: 1, width: 1, objectFit: 'contain' }} />
          </Box>

          <Stack direction="column">
            <Typography variant="body2" sx={{ fontWeight: 600, fontFamily: 'Work Sans' }}>
              Apple Watch S8
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
              320 in stock
            </Typography>
          </Stack>
        </Stack>

        <Typography variant="caption" sx={{ fontWeight: 500 }}>
          $ 799.00
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ProductsCard;
