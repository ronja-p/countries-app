import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <AppBar
        position="fixed"
        elevation={0}
        component="footer"
        color="default"
        sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar style={{ justifyContent: 'center' }}>
          <Typography variant="body1">&copy; Ronja Pietrzykowska 2022</Typography>
        </Toolbar>
      </AppBar>
    </footer>
  );
};

export default Footer;
