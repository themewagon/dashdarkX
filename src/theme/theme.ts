import { createTheme } from '@mui/material/styles';
import CssBaseline from './components/utils/CssBaseline';
import palette from './palette';
import typography from './typography';
import customShadows from './shadows';

export const theme = createTheme({
  typography,
  palette,
  components: {
    MuiCssBaseline: CssBaseline,
  },
  customShadows,
  spacing: 8,
});
