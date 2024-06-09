import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <Typography
      mt={1}
      px={1}
      color="text.secondary"
      variant="body2"
      align="right"
      letterSpacing={0.5}
    >
      Made with ❤️ by{' '}
      <Link href="https://themewagon.com/" target="_blank" rel="noreferrer">
        {'ThemeWagon'}
      </Link>
    </Typography>
  );
};

export default Footer;
