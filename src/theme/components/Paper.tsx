import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const Paper: Components<Omit<Theme, 'components'>>['MuiPaper'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            padding: '20px',
            backgroundColor: theme.palette.neutral.contrastText,
            boxShadow: theme.customShadows[0],
            borderRadius: '20px'
        })
    },
}

export default Paper;