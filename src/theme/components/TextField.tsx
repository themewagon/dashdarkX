import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const TextField: Components<Omit<Theme, 'components'>>['MuiTextField'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            padding: '0.625rem 0.6rem',
            background: '#fff !important',
            border: '1px solid #E2E8F0',
            borderRadius: '1rem',

            '& .MuiInputBase-root': {
                borderRadius: 0,
                paddingLeft: 0,
                background: '#fff !important',

                '&:before, &:after': {
                    display: 'none',
                },
            },

            '& .MuiInputBase-input': {
                padding: 0,
                fontSize: theme.typography.caption
            },

            '& .MuiInputAdornment-root': {
                marginTop: '0 !important',
                marginRight: 0,
            },
        }),
    },
}

export default TextField;