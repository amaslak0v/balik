import * as React from 'react';
import Map from 'react-map-gl';
import RestaurantMarker from './RestaurantMarker';
import { getRestaurantsQuery } from '../services/Firebase';
import RestaurantPopup from './RestaurantPopup'; // Import the RestaurantDetails component

const DEFAULT_VIEW_STATE = {
  latitude: -8.638077718909088,
  longitude: 115.14939358574861,
  zoom: 12,
  width: '600px',
  height: '600px',
};

function RestaurantMap() {
  const [viewState, setViewState] = React.useState(DEFAULT_VIEW_STATE);
  const [restaurants, setRestaurants] = React.useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = React.useState(null);
  const [error, setError] = React.useState(null);
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRestaurantsQuery();
        setRestaurants(data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setError('Failed to fetch data');
      }
    };
    fetchData();
  }, []);

  const handleMarkerClick = React.useCallback((restaurant) => {
    setSelectedRestaurant(restaurant);
    const map = mapRef.current.getMap();
    map.flyTo({
      latitude: restaurant.location._lat,
      longitude: restaurant.location._long,
      duration: 2000,
    });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh' }}>
      <RestaurantPopup
        restaurant={selectedRestaurant}
        onClose={() => setSelectedRestaurant(null)}
      />

      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        ref={mapRef}
        style={{ flex: 1 }}
        mapStyle='mapbox://styles/amaslakov/clhxcf2am007a01qshqt7bmpx'
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      >
        {restaurants.map((restaurant, index) =>
          restaurant.location && (
            <RestaurantMarker
              key={index}
              restaurant={restaurant}
              onClick={() => handleMarkerClick(restaurant)}
            />
          ),
        )}
      </Map>
    </div>
  );
}

export default RestaurantMap;
