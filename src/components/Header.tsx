import { Box, Typography } from "@mui/material";
import { Icon } from '@iconify/react';

const Header = () => {
    return (
        <Box>
            <Typography variant="h1">Header</Typography>
            <Icon icon="ion:home" />
        </Box>
    );
}

export default Header;