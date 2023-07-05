import React from 'react';
import RestaurantMap from './components/RestaurantMap';
import 'mapbox-gl/dist/mapbox-gl.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
  },
});


// Import the global styles for your app
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <RestaurantMap />
      </ThemeProvider>
    </div>
  );
}

export default App;

