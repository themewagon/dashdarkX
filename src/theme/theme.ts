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
import Toolbar from './components/layout/Toolbar';
import Link from './components/navigation/Link';
import CssBaseline from './components/CssBaseline';
import DataGrid from './components/data-grid/DataGrid';
import Pagination from './components/pagination/Pagination';
import PaginationItem from './components/pagination/PaginationItem';
import type {} from '@mui/x-data-grid/themeAugmentation';
import type {} from '@mui/x-date-pickers/themeAugmentation';
import Divider from './components/data-display/Divider';
import Chip from './components/data-display/Chip';
import MonthCalendar from './components/date-picker/MonthCalendar';
import YearCalendar from './components/date-picker/YearCalendar';
import Collapse from './components/list/Collapse';
import Checkbox from './components/inputs/Checkbox';

export const theme = createTheme({
    typography,
    palette,
    components: {
        MuiButton: Button,
        MuiPaper: Paper,
        MuiCollapse: Collapse,
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
        MuiCheckbox: Checkbox,
        MuiDivider: Divider,
        MuiChip: Chip,
        MuiDataGrid: DataGrid,
        MuiPagination: Pagination,
        MuiPaginationItem: PaginationItem,
        MuiMonthCalendar: MonthCalendar,
        MuiYearCalendar: YearCalendar
    },
    customShadows,
    spacing: 8,
});