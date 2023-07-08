import React from 'react';
import DealMap from './components/Deals/DealMap';
import 'mapbox-gl/dist/mapbox-gl.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
  },
});

import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <DealMap />
      </ThemeProvider>
    </div>
  );
}

export default App;
