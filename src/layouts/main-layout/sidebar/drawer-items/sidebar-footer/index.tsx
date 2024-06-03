import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconifyIcon from 'components/base/IconifyIcon';

const SidebarFooter = () => {
  return (
    <Box sx={(theme) => ({ p: theme.spacing(7, 3.5, 30), width: 1 })}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        endIcon={<IconifyIcon icon="mingcute:arrow-right-line" />}
      >
        Get template
      </Button>
    </Box>
  );
};

export default SidebarFooter;
