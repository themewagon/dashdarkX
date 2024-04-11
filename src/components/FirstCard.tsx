import { Box, useTheme, Typography } from "@mui/material";
import { Icon } from '@iconify/react';

const FirstCard = () => {
    const theme = useTheme();

    return (
        <Box sx={{position: 'relative', padding: '20px', height: '130px', width: '100%', boxShadow: theme.customShadows[0], backgroundColor: '#fff', borderRadius: '20px'}}>
            <Typography variant="caption" sx={{color: theme.palette.action.disabled, textTransform: 'uppercase'}}>TODAY’S MONEY</Typography><br/>
            <Typography variant="h6" sx={{marginTop: '5px', color: theme.palette.neutral.light}}>$53,897</Typography>
        
            <Box sx={{marginTop: '20px', display: 'flex', alignItems: 'center', gap: '6px'}}>
                <Typography variant="subtitle2" sx={{color: theme.palette.success.light, fontWeight: 700}}>+3.48%</Typography>
                <Typography variant="body2" sx={{color: theme.palette.action.disabled}}>Since last month</Typography>
            </Box>

            <Box sx={{position: 'absolute', top: '20px', right: '20px', height: '48px', width: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.palette.secondary.main, borderRadius: '8px'}}>
                <Icon icon={`ion:wallet`} style={{color: '#fff', fontSize: '1.3rem'}}/>
            </Box>
        </Box>
    );
}

export default FirstCard;