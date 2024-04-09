import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import Button from './components/Button';
import customShadows from './shadows';

export const theme = createTheme({
    typography,
    palette,
    components: {
        MuiButton: Button
    },
    customShadows
});