import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography, Button, useTheme } from '@mui/material';

const PageVisitsTable = () => {
    const theme = useTheme();

    return (
        <TableContainer component={Paper} sx={{borderRadius: '20px', boxShadow: theme.customShadows[0]}}>
            <Box sx={{padding: '24px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <Typography variant="h6">Page visits</Typography>
                <Button variant="contained" size="small" color="primary">SEE ALL</Button>
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
                        <TableCell>
                            <Typography variant="button" sx={{color: '#A0AEC0'}}>UNIQUE USERS</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="button" sx={{color: '#A0AEC0'}}>BOUNCE RATE</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Row 1, Cell 1</TableCell>
                        <TableCell>Row 1, Cell 2</TableCell>
                        <TableCell>Row 1, Cell 3</TableCell>
                        <TableCell>Row 1, Cell 4</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Row 2, Cell 1</TableCell>
                        <TableCell>Row 2, Cell 2</TableCell>
                        <TableCell>Row 2, Cell 3</TableCell>
                        <TableCell>Row 2, Cell 4</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Row 2, Cell 1</TableCell>
                        <TableCell>Row 2, Cell 2</TableCell>
                        <TableCell>Row 2, Cell 3</TableCell>
                        <TableCell>Row 2, Cell 4</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Row 2, Cell 1</TableCell>
                        <TableCell>Row 2, Cell 2</TableCell>
                        <TableCell>Row 2, Cell 3</TableCell>
                        <TableCell>Row 2, Cell 4</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Row 2, Cell 1</TableCell>
                        <TableCell>Row 2, Cell 2</TableCell>
                        <TableCell>Row 2, Cell 3</TableCell>
                        <TableCell>Row 2, Cell 4</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default PageVisitsTable;