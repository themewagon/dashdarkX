import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const TextField: Components<Omit<Theme, 'components'>>['MuiTextField'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            padding: theme.spacing(1.25, 1.2),
            background: '#fff !important',
            border: 1,
            borderStyle: 'solid',
            borderColor: theme.palette.action.disabledBackground,
            borderRadius: theme.shape.borderRadius * 3,

            '& .MuiInputBase-root': {
                paddingLeft: 0,
                borderRadius: 0,
                background: '#fff !important',

                '&:before, &:after': {
                    display: 'none',
                },
            },

            '& .MuiInputBase-input': {
                padding: 0,
                paddingLeft: theme.spacing(0.6),
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