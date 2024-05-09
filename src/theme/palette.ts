import { PaletteColorOptions, PaletteOptions } from '@mui/material/styles';
import { grey, cyan, blue, purple, yellow, white } from './colors';

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
    neutral: {
        light: grey[200],
        main: grey[300],
        dark: grey[400],
        darker: grey[500],
    },
    primary: {
        main: purple[500],
        dark: purple[900],
    },
    secondary: {
        light: cyan[500],
        main: purple[300],
    },
    info: {
        lighter: blue[100],
        light: blue[300],
        main: blue[600],
        dark: blue[700],
        darker: blue[800],
    },
    warning: {
        main: yellow[500],
    },
    text: {
        primary: white[500],
        secondary: grey[400],
        disabled: grey[500],
    }
};

export default palette;