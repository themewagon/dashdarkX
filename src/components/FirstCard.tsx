import { Box, useTheme, Typography } from "@mui/material";
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
        <Box sx={{position: 'relative', padding: '20px', height: '130px', width: '100%', boxShadow: theme.customShadows[0], backgroundColor: '#fff', borderRadius: '20px'}}>
            <Typography variant="caption" sx={{color: theme.palette.action.disabled, textTransform: 'uppercase'}}>{title}</Typography><br/>
            <Typography variant="h6" sx={{marginTop: '5px', color: theme.palette.neutral.light}}>{value}</Typography>
        
            <Box sx={{marginTop: '20px', display: 'flex', alignItems: 'center', gap: '6px'}}>
                <Typography variant="subtitle2" sx={{color: (rate[0] === '-') ? theme.palette.error.main : theme.palette.success.light , fontWeight: 700}}>{rate}</Typography>
                <Typography variant="body2" sx={{color: theme.palette.action.disabled}}>Since last month</Typography>
            </Box>

            <Box sx={{position: 'absolute', top: '20px', right: '20px', height: '48px', width: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.palette.secondary.main, borderRadius: '8px'}}>
                <Icon icon={`ion:${icon}`} style={{color: '#fff', fontSize: '1.4rem'}}/>
            </Box>
        </Box>
    );
}

export default FirstCard;