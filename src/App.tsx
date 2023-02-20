import React from 'react';

import Index from './routes';
import './App.css';
import { Container } from '@mui/system';

function App() {
  return (
    <Container sx={{ pt: 10 }}>
      <Index />
    </Container>
  );
}

export default App;
