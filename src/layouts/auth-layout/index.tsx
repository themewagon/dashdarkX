import { ReactNode } from 'react';
import Stack from '@mui/material/Stack';

interface LayoutProps {
    children: ReactNode
}

const AuthLayout = ({children}: LayoutProps) => {
    return (
        <Stack mx="auto" alignItems="center" justifyContent="center" sx={{width: 1, minHeight: '100vh'}}>
            {children}
        </Stack>
    );
}

export default AuthLayout;