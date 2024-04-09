import { TypographyOptions } from '@mui/material/styles/createTypography';

const typography: TypographyOptions = {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    h1: {
        fontSize: '3rem',
        lineHeight: '3.75rem',
        fontWeight: 700
    },
    h2: {
        fontSize: '2.25rem',
        lineHeight: '2.75rem',
        fontWeight: 700
    },
    h3: {
        fontSize: '1.875rem',
        lineHeight: '2.375rem',
        fontWeight: 700
    },
    h4: {
        fontSize: '1.5rem',
        lineHeight: '2rem',
        fontWeight: 700
    },
    h5: {
        fontSize: '1.25rem',
        lineHeight: '1.875rem',
        fontWeight: 700
    },
    h6: {
        fontSize: '1.125rem',
        lineHeight: '1.75rem',
        fontWeight: 700
    },
    subtitle1: {
        fontSize: '1rem',
        lineHeight: '1.5rem',
        fontWeight: 400
    },
    subtitle2: {
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        fontWeight: 500
    },
    body1: {
        fontSize: '1rem',
        lineHeight: '1.5rem',
        fontWeight: 400
    },
    body2: {
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        fontWeight: 400
    },
    caption: {
        fontSize: '0.75rem',
        lineHeight: '1.125rem',
        fontWeight: 700
    },
    button: {
        fontSize: '0.625rem',
        lineHeight: '1rem',
        fontWeight: 700,
        textTransform: 'uppercase'
    }
}

export default typography;