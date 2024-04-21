import { Typography, Link, useTheme } from '@mui/material';

const Footer = () => {
    const theme = useTheme();

    return (
        <Typography variant="caption" sx={{color: theme.palette.action.disabled, fontWeight: 500}}>@ 2021, Made with ❤️ by 
            <Link href="#" sx={{color: theme.palette.primary.main, fontWeight: 700, textDecoration: 'none'}}> Creative Tim</Link> & 
            <Link href="#" sx={{color: theme.palette.primary.main, fontWeight: 700, textDecoration: 'none'}}> Simmmple</Link> for a better web
        </Typography>
    );
}

export default Footer;