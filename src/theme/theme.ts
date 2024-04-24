import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import Button from './components/Button';
import Paper from './components/Paper';
import customShadows from './shadows';
import ListItemButton from './components/ListItemButton';
import ListItemIcon from './components/ListItemIcon';
import ListItemText from './components/ListItemText';
import Drawer from './components/Drawer';
import DataGrid from './components/DataGrid';
import TextField from './components/TextField';
import Toolbar from './components/Toolbar';
import Link from './components/Link';
import Stack from './components/Stack';
import CssBaseline from './components/CssBaseline';
import type {} from '@mui/x-data-grid/themeAugmentation';
import ButtonBase from './components/ButtonBase';
import IconButton from './components/IconButton';

export const theme = createTheme({
    typography,
    palette,
    components: {
        MuiButton: Button,
        MuiPaper: Paper,
        MuiListItemButton: ListItemButton,
        MuiListItemIcon: ListItemIcon,
        MuiListItemText: ListItemText,
        MuiDrawer: Drawer,
        MuiDataGrid: DataGrid,
        MuiTextField: TextField,
        MuiToolbar: Toolbar,
        MuiCssBaseline: CssBaseline,
        MuiLink: Link,
        MuiStack: Stack,
        MuiButtonBase: ButtonBase,
        MuiIconButton: IconButton
    },
    customShadows,
    spacing: 8,
});