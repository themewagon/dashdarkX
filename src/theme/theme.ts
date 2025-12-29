import { createTheme } from '@mui/material/styles';
import CssBaseline from './components/utils/CssBaseline';
import palette from './palette';
import typography from './typography';
import customShadows from './shadows';

import Button from './components/button/Button';
import ButtonBase from './components/button/ButtonBase';
import IconButton from './components/button/IconButton';
import Toolbar from './components/button/Toolbar';
import Stack from './components/layout/Stack';
import List from './components/list/List';
import ListItemButton from './components/list/ListItemButton';
import ListItemIcon from './components/list/ListItemIcon';
import ListItemText from './components/list/ListItemText';
import MenuItem from './components/list/MenuItem';
import Collapse from './components/list/Collapse';

export const theme = createTheme({
  typography,
  palette,
  components: {
    MuiStack: Stack,

    MuiButton: Button,
    MuiButtonBase: ButtonBase,
    MuiIconButton: IconButton,
    MuiToolbar: Toolbar,

    MuiList: List,
    MuiListItemButton: ListItemButton,
    MuiListItemIcon: ListItemIcon,
    MuiListItemText: ListItemText,
    MuiMenuItem: MenuItem,
    MuiCollapse: Collapse,

    MuiCssBaseline: CssBaseline,
  },
  customShadows,
  spacing: 8,
});
