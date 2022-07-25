import Router from './Routes/Router';
import {ThemeProvider} from '@mui/material'
import React from 'react';
import Theme from '../src/constants/Theme';


function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router/>
    </ThemeProvider>
  );
}

export default App;
