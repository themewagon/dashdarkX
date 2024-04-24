import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconifyIcon from "./base/IconifyIcon";

interface firstCardProps {
    title: string,
    value: string,
    rate: string,
    icon: string
}

const FirstCard = (props: firstCardProps) => {
    const {title, value, rate, icon} = props;

    return (
        <Stack direction="column" justifyContent="space-between" component={Paper} sx={{position: 'relative', height: 132, width: 1}}>
            <Box>
                <Typography variant="caption" color="grey.400" sx={{textTransform: 'uppercase'}}>{title}</Typography><br/>
                <Typography variant="h6" color="grey.700">{value}</Typography>
            </Box>
        
            <Stack spacing={0.75} alignItems="center">
                <Typography variant="subtitle2" sx={(theme) => ({color: (rate[0] === '-') ? theme.palette.error.main : theme.palette.success.light, fontWeight: 700})}>{rate}</Typography>
                <Typography variant="body2" color="grey.400">Since last month</Typography>
            </Stack>

            <Stack alignItems="center" justifyContent="center" sx={(theme) => ({position: 'absolute', top: 20, right: 20, height: 48, width: 48, bgcolor: theme.palette.primary.main, borderRadius: 2})}>
                <IconifyIcon icon={`ion:${icon}`} sx={{color: '#fff', fontSize: '1.4rem'}}/>
            </Stack>
        </Stack>
    );
}

export default FirstCard;