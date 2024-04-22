import { Theme } from '@mui/material';

const scrollbar = (theme: Theme) => ({
    '@supports (-moz-appearance:none)': {
        scrollbarColor: `${theme.palette.grey[300]} transparent`,
    },
    '*::-webkit-scrollbar': {
        visibility: 'hidden',
        WebkitAppearance: 'none',
        width: 6,
        height: 6,
        backgroundColor: 'transparent',
    },
    '*::-webkit-scrollbar-track': {
        margin: 16,
    },
    '*::-webkit-scrollbar-thumb': {
        visibility: 'hidden',
        borderRadius: 3,
        backgroundColor: theme.palette.grey[300],
    },
    '&:hover, &:focus': {
        '*::-webkit-scrollbar, *::-webkit-scrollbar-thumb': {
            visibility: 'visible',
        },
    },
});

export default scrollbar;