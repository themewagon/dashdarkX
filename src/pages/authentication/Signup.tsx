import {
  Link,
  Stack,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Divider,
} from '@mui/material';
import paths from 'routes/paths';
import IconifyIcon from 'components/base/IconifyIcon';

const Signup = () => {
  return (
    <>
      <Typography align="center" variant="h3" sx={{ fontWeight: 600 }}>
        SignUp
      </Typography>
      <Stack mt={4} spacing={2} sx={{ width: 1 }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          startIcon={<IconifyIcon icon="uim:google" />}
        >
          Login with Google
        </Button>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          startIcon={<IconifyIcon icon="uim:apple" />}
        >
          Login with Apple
        </Button>
      </Stack>
      <Divider sx={{ my: 3, color: 'text.secondary' }}>or Login with</Divider>
      <Stack component="form" direction="column" gap={2}>
        <TextField
          id="name"
          name="name"
          variant="filled"
          placeholder="Your Name"
          autoComplete="name"
          fullWidth
          autoFocus
          required
        />
        <TextField
          id="email"
          name="email"
          variant="filled"
          placeholder="Your Email"
          autoComplete="email"
          fullWidth
          autoFocus
          required
        />
        <TextField
          id="password"
          name="password"
          variant="filled"
          placeholder="Your Password"
          autoComplete="password"
          fullWidth
          autoFocus
          required
        />
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Remember me"
          sx={{ mt: -1.5 }}
        />
        <Button type="submit" fullWidth variant="contained" size="medium">
          Submit
        </Button>
        <Typography
          my={3}
          color="text.secondary"
          variant="body2"
          align="center"
          sx={{ fontWeight: 500, letterSpacing: 0.5 }}
        >
          Don't have an account?{' '}
          <Link href={paths.login} variant="body2" sx={{ mt: 2 }}>
            {'Login'}
          </Link>
        </Typography>
      </Stack>
    </>
  );
};

export default Signup;
