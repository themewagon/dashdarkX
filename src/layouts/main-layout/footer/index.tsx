import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => {
    return (
        <Typography variant="caption" color="grey.400" sx={{py: 0.8, fontWeight: 500, textAlign: {xs: 'center', lg: 'left'}}}>@ 2021, Made with ❤️ by 
            <Link href="#!" color="primary" sx={{fontWeight: 700, textDecoration: 'none'}}>&nbsp;Creative Tim</Link> & 
            <Link href="#!" color="primary" sx={{fontWeight: 700, textDecoration: 'none'}}>&nbsp;Simmmple</Link> for a better web
        </Typography>
    );
}

export default Footer;