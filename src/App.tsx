import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DealMap from './components/Deals/DealMap';
import 'mapbox-gl/dist/mapbox-gl.css';
import './styles/App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <DealMap />
    </ThemeProvider>
  );
};

export default App;
