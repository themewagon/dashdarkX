import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const Chip: Components<Omit<Theme, 'components'>>['MuiChip'] = {
    styleOverrides: {
        root: ({ theme }) => ({
            border: 1,
            borderStyle: 'solid',
            borderRadius: theme.shape.borderRadius / 2,
            fontSize: theme.typography.caption.fontSize,
        })
    }
}

export default Chip;