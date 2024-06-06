import { fontFamily } from 'theme/typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DateSelect from 'components/dates/DateSelect';
import OrdersStatusTable from './OrdersStatusTable';

const OrdersStatus = () => {
  return (
    <Paper sx={{ px: 0 }}>
      <Stack px={3.5} alignItems="center" justifyContent="space-between">
        <Typography variant="h6" sx={{ fontWeight: 400, fontFamily: fontFamily.workSans }}>
          Orders Status
        </Typography>
        <Stack spacing={1.5} alignItems="center">
          <DateSelect />
          <Button variant="contained" size="small">
            Create order
          </Button>
        </Stack>
      </Stack>

      <Box mt={1.5} sx={{ height: 594, width: 1 }}>
        <OrdersStatusTable />
      </Box>
    </Paper>
  );
};

export default OrdersStatus;
