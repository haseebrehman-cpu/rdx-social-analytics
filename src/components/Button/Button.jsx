import React from 'react';
import { Button as MuiButton, Box } from '@mui/material';

const Button = ({ children, startIcon, ...props }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <MuiButton
        variant="contained"
        sx={{
          backgroundColor: '#422AFB',
          color: 'white',
          borderRadius: '16px',
          fontSize: '12px',
          py: '10px',
          alignItems: 'center',
          justifyContent: 'center',
          my: '10px',
        }}
        {...props}
        startIcon={startIcon}
      >
        {children}
      </MuiButton>
    </Box>
  );
};

export default Button;
