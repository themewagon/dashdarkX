declare module '@mui/material/styles' {
    interface Theme {
        customShadows: string[]
    }
    interface ThemeOptions {
        customShadows?: string[]
    }
}

const customShadows = [
    '0px 5px 14px 0px #0000000D'
];

export default customShadows;