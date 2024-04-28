import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import customShadows from './shadows';
import Button from './components/button/Button';
import ButtonBase from './components/button/ButtonBase';
import IconButton from './components/button/IconButton';
import Stack from './components/layout/Stack';
import Paper from './components/layout/Paper';
import Drawer from './components/layout/Drawer';
import ListItemButton from './components/list/ListItemButton';
import ListItemIcon from './components/list/ListItemIcon';
import ListItemText from './components/list/ListItemText';
import TextField from './components/text-field/TextField';
import InputBase from './components/text-field/InputBase';
import FilledInput from './components/text-field/FilledInput';
import InputAdornment from './components/text-field/InputAdornment';
import Toolbar from './components/Toolbar';
import Link from './components/Link';
import CssBaseline from './components/CssBaseline';
import type {} from '@mui/x-data-grid/themeAugmentation';

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
        MuiTextField: TextField,
        MuiToolbar: Toolbar,
        MuiCssBaseline: CssBaseline,
        MuiLink: Link,
        MuiStack: Stack,
        MuiButtonBase: ButtonBase,
        MuiIconButton: IconButton,
        MuiInputBase: InputBase,
        MuiInputAdornment: InputAdornment,
        MuiFilledInput: FilledInput,
    },
    customShadows,
    spacing: 8,
});