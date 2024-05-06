import { PropsWithChildren } from 'react';
import Stack from '@mui/material/Stack';

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <Stack
      mx="auto"
      alignItems="center"
      justifyContent="center"
      sx={{ width: 1, minHeight: '100vh' }}
    >
      {children}
    </Stack>
  );
};

export default AuthLayout;
