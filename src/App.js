import React from 'react';
import RestaurantMap from './components/RestaurantMap';
import 'mapbox-gl/dist/mapbox-gl.css';

// Import the global styles for your app
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <RestaurantMap />
    </div>
  );
}

export default App;

