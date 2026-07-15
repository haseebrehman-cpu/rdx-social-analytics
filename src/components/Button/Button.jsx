import { Button, Box } from '@mui/material';

const CustomButton = ({ children, startIcon, ...props }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button {...props} startIcon={startIcon}>
        {children}
      </Button>
    </Box>
  );
};

export default CustomButton;
