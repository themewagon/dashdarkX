import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';

const ComingSoon = () => {
  const currentPath = useLocation().pathname.split('/').pop();

  return (
    <Typography variant="h3" sx={{ textTransform: 'capitalize' }}>
      Coming Soon - [&nbsp;{currentPath}&nbsp;]
    </Typography>
  );
};

export default ComingSoon;
