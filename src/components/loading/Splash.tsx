import Stack from "@mui/material/Stack";
import CircularProgress from '@mui/material/CircularProgress';

const Splash = () => {
    return (
        <Stack alignItems="center" justifyContent="center" sx={{height: '100vh', width: 1}}>
            <CircularProgress/>
        </Stack>
    );
}

export default Splash;