import { PaletteColorOptions, PaletteOptions } from '@mui/material/styles';
import { blue, cyan, green, grey, orange, red, teal } from './colors';

declare module '@mui/material/styles' {
    interface PaletteOptions {
        neutral?: PaletteColorOptions;
    }
    interface SimplePaletteColorOptions {
        lighter?: string;
        darker?: string;
    }
    interface Palette {
        neutral: PaletteColor;
    }
    interface PaletteColor {
        lighter: string;
        darker: string;
    }
}

const palette: PaletteOptions = {
    action: {
        active: grey[500],
        hover: grey[50],
        selected: grey[100],
        disabled: grey[400],
        disabledBackground: grey[200],
        focus: grey[300],
    },
    neutral: {
        lighter: grey[100],
        light: grey[700],
        main: grey[800],
        dark: grey[900],
        darker: grey[900],
        white: '#fff',
    },
    primary: {
        lighter: blue[50],
        light: blue[300],
        main: blue[500],
        dark: blue[700],
        darker: blue[900],
    },
    secondary: {
        lighter: teal[50],
        light: teal[400],
        main: teal[500],
        dark: teal[600],
        darker: teal[900],
    },
    error: { 
        lighter: red[50],
        light: red[300],
        main: red[500],
        dark: red[600],
        darker: red[900]
    },
    warning: {
        lighter: orange[50],
        light: orange[400],
        main: orange[500],
        dark: orange[700],
        darker: orange[900],
        white: '#fff',
    },
    success: {
        lighter: green[50],
        light: green[400],
        main: green[500],
        dark: green[700],
        darker: green[900],
    },
    info: {
        lighter: cyan[50],
        light: cyan[300],
        main: cyan[500],
        dark: cyan[700],
        darker: cyan[900],
        white: '#fff',
    },
    grey,
    text: {
        primary: grey[800],
        secondary: grey[600],
        disabled: grey[400],
    },
};

export default palette;