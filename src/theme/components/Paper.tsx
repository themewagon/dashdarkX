import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const Paper: Components<Omit<Theme, 'components'>>['MuiPaper'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            padding: theme.spacing(2.5),
            backgroundColor: theme.palette.neutral.contrastText,
            boxShadow: theme.customShadows[0],
            borderRadius: theme.shape.borderRadius * 5
        })
    },
}

export default Paper;