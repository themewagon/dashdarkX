import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import Button from './components/Button';
import Paper from './components/Paper';
import customShadows from './shadows';
import ListItemButton from './components/ListItemButton';
import ListItemIcon from './components/ListItemIcon';
import ListItemText from './components/ListItemText';

export const theme = createTheme({
    typography,
    palette,
    components: {
        MuiButton: Button,
        MuiPaper: Paper,
        MuiListItemButton: ListItemButton,
        MuiListItemIcon: ListItemIcon,
        MuiListItemText: ListItemText
    },
    customShadows
});