import { Box, Paper, Typography, useTheme } from "@mui/material";
import { Icon } from '@iconify/react';

interface firstCardProps {
    title: string,
    value: string,
    rate: string,
    icon: string
}

const FirstCard = ({title, value, rate, icon}: firstCardProps) => {
    const theme = useTheme();

    return (
        <Box component={Paper} sx={{position: 'relative', height: '8.25rem', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <Box>
                <Typography variant="caption" sx={{color: theme.palette.action.disabled, textTransform: 'uppercase'}}>{title}</Typography><br/>
                <Typography variant="h6" sx={{color: theme.palette.neutral.light}}>{value}</Typography>
            </Box>
        
            <Box sx={{display: 'flex', alignItems: 'center', gap: '0.375rem'}}>
                <Typography variant="subtitle2" sx={{color: (rate[0] === '-') ? theme.palette.error.main : theme.palette.success.light, fontWeight: 700}}>{rate}</Typography>
                <Typography variant="body2" sx={{color: theme.palette.action.disabled}}>Since last month</Typography>
            </Box>

            <Box sx={{position: 'absolute', top: '1.25rem', right: '1.25rem', height: '3rem', width: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.palette.primary.main, borderRadius: '0.5rem'}}>
                <Icon icon={`ion:${icon}`} style={{color: '#fff', fontSize: '1.4rem'}}/>
            </Box>
        </Box>
    );
}

export default FirstCard;