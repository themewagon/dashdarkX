import { PropsWithChildren } from 'react';
import Stack from '@mui/material/Stack';
import { Paper } from '@mui/material';

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <Stack
      component="main"
      alignItems="center"
      justifyContent="center"
      sx={{ width: 1, minHeight: '100vh' }}
    >
      <Paper sx={{width: 1, maxWidth: 460}}>
        {children}
      </Paper>
    </Stack>
  );
};

export default AuthLayout;
