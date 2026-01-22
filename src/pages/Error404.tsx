import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Stack
        direction="column"
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Typography variant="h1" fontSize={100} mb={2}>
          404
        </Typography>

        <Typography variant="h2" color="text.secondary" mb={1.5}>
          Page Not Found
        </Typography>

        <Typography variant="body1" color="text.secondary" maxWidth={520} mx="auto" mb={4}>
          Sorry, the page you are looking for doesn’t exist or has been moved
        </Typography>

        <Button variant="contained" size="large" onClick={() => navigate('/')}>
          Go Back Home
        </Button>
      </Stack>
    </Container>
  );
};

export default Error404;
