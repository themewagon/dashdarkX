import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import RateChip from "components/chips/RateChip";
import DateSelect from "./DateSelect";

const StackedBarChart = () => {
    return (
        <Box component={Paper} sx={{height: 500}}>
            <Typography variant="subtitle1" color="text.secondary">Revenue by customer type</Typography>
            <Stack justifyContent="space-between" mt={1}>
                <Stack alignItems="center" gap={0.8}>
                    <Typography variant="h4" sx={{ fontWeight: 600, letterSpacing: 1 }}>
                        $240.8K
                    </Typography>
                    <RateChip rate={"14.8%"} isPositive={true} />
                </Stack>

                <Stack spacing={2}>
                    <Stack spacing={0.5} alignItems="center">
                        <Box sx={{height: 8, width: 8, bgcolor: 'primary.main', borderRadius: 1}}></Box>
                        <Typography variant='body2' color="text.secondary" sx={{fontFamily: 'Work Sans'}}>Current clients</Typography>
                    </Stack>
                    <Stack spacing={0.5} alignItems="center">
                        <Box sx={{height: 8, width: 8, bgcolor: 'info.light', borderRadius: 1}}></Box>
                        <Typography variant='body2' color="text.secondary" sx={{fontFamily: 'Work Sans'}}>Subscribers</Typography>
                    </Stack>
                    <Stack spacing={0.5} alignItems="center">
                        <Box sx={{height: 8, width: 8, bgcolor: 'secondary.light', borderRadius: 1}}></Box>
                        <Typography variant='body2' color="text.secondary" sx={{fontFamily: 'Work Sans'}}>New customers</Typography>
                    </Stack>
                    <DateSelect/>
                </Stack>

            </Stack>
        </Box>
    );
}

export default StackedBarChart;