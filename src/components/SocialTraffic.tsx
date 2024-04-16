import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography, Button, useTheme } from '@mui/material';

const SocialTraffic = () => {
    const theme = useTheme();

    return (
        <TableContainer component={Paper} sx={{borderRadius: '20px', boxShadow: theme.customShadows[0]}}>
            <Box sx={{padding: '24px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <Typography variant="h6">Page visits</Typography>
                <Button variant="contained" sx={{height: '28px', width: '70px', background: theme.palette.secondary.main}}>SEE ALL</Button>
            </Box>
            
            <Table>
                <TableHead sx={{height: '40px', width: '100%', background: '#F7FAFC', border: '1px solid #EDF2F7'}}>
                    <TableRow>
                        <TableCell>
                            <Typography variant="button" sx={{color: '#A0AEC0'}}>PAGE NAME</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="button" sx={{color: '#A0AEC0'}}>VISITORS</Typography>
                        </TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Row 1, Cell 1</TableCell>
                        <TableCell>Row 1, Cell 2</TableCell>
                        <TableCell>Row 1, Cell 3</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Row 2, Cell 1</TableCell>
                        <TableCell>Row 2, Cell 2</TableCell>
                        <TableCell>Row 2, Cell 3</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Row 2, Cell 1</TableCell>
                        <TableCell>Row 2, Cell 2</TableCell>
                        <TableCell>Row 2, Cell 3</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Row 2, Cell 1</TableCell>
                        <TableCell>Row 2, Cell 2</TableCell>
                        <TableCell>Row 2, Cell 3</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Row 2, Cell 1</TableCell>
                        <TableCell>Row 2, Cell 2</TableCell>
                        <TableCell>Row 2, Cell 3</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default SocialTraffic;