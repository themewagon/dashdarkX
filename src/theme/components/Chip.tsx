import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const Chip: Components<Omit<Theme, 'components'>>['MuiChip'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            padding: theme.spacing(0, 0.25),
            fontSize: theme.typography.caption.fontSize,
            height: '20px',
            border: 1,
            borderStyle: 'solid',
            borderRadius: theme.shape.borderRadius / 2,
        })
    }
}

export default Chip;