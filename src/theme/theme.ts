import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import Button from './components/Button';

export const theme = createTheme({
    typography,
    palette,
    components: {
        MuiButton: Button
    }
});