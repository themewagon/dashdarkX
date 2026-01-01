import { createTheme } from '@mui/material/styles';
import type {} from '@mui/x-data-grid/themeAugmentation';
import type {} from '@mui/x-date-pickers/themeAugmentation';
import CssBaseline from './components/utils/CssBaseline';
import palette from './palette';
import typography from './typography';
import customShadows from './shadows';

import Button from './components/button/Button';
import ButtonBase from './components/button/ButtonBase';
import IconButton from './components/button/IconButton';
import Toolbar from './components/button/Toolbar';
import Stack from './components/layout/Stack';
import Paper from './components/surface/Paper';
import Checkbox from './components/input/Checkbox';
import InputBase from './components/input/InputBase';
import FilledInput from './components/input/FilledInput';
import InputAdornment from './components/input/InputAdornment';
import FormControlLabel from './components/input/FormControlLabel';
import OutlinedInput from './components/input/OutlinedInput';
import TextField from './components/input/TextField';
import Drawer from './components/navigation/Drawer';
import Divider from './components/data-display/Divider';
import Chip from './components/data-display/Chip';
import Link from './components/navigation/Link';
import List from './components/list/List';
import ListItemButton from './components/list/ListItemButton';
import ListItemIcon from './components/list/ListItemIcon';
import ListItemText from './components/list/ListItemText';
import MenuItem from './components/list/MenuItem';
import Collapse from './components/list/Collapse';
import DataGrid from './components/data-grid/DataGrid';
import MonthCalendar from './components/date-picker/MonthCalendar';
import YearCalendar from './components/date-picker/YearCalendar';
import PaginationItem from './components/pagination/PaginationItem';

export const theme = createTheme({
  typography,
  palette,
  components: {
    MuiStack: Stack,
    MuiPaper: Paper,

    MuiButton: Button,
    MuiButtonBase: ButtonBase,
    MuiIconButton: IconButton,
    MuiToolbar: Toolbar,

    MuiCheckbox: Checkbox,
    MuiFilledInput: FilledInput,
    MuiFormControlLabel: FormControlLabel,
    MuiInputAdornment: InputAdornment,
    MuiInputBase: InputBase,
    MuiOutlinedInput: OutlinedInput,
    MuiTextField: TextField,

    MuiDrawer: Drawer,
    MuiDivider: Divider,
    MuiChip: Chip,
    MuiLink: Link,

    MuiList: List,
    MuiListItemButton: ListItemButton,
    MuiListItemIcon: ListItemIcon,
    MuiListItemText: ListItemText,
    MuiMenuItem: MenuItem,
    MuiCollapse: Collapse,

    MuiDataGrid: DataGrid,
    MuiMonthCalendar: MonthCalendar,
    MuiYearCalendar: YearCalendar,
    MuiPaginationItem: PaginationItem,
    MuiCssBaseline: CssBaseline,
  },
  customShadows,
  spacing: 8,
});
