import { Theme } from '@mui/material';

const scrollbar = (theme: Theme) => ({
    '@supports (-moz-appearance:none)': {
        scrollbarColor: `${theme.palette.grey[300]} transparent`,
    },
    '*::-webkit-scrollbar': {
        visibility: 'hidden',
        WebkitAppearance: 'none',
        width: 5,
        backgroundColor: 'transparent',
    },
    '*::-webkit-scrollbar-track': {
        margin: 0,
    },
    '*::-webkit-scrollbar-thumb': {
        visibility: 'hidden',
        borderRadius: 3,
        backgroundColor: theme.palette.info.main,
    }
});

export default scrollbar;