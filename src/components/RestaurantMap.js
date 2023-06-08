import * as React from "react";
import Map from "react-map-gl";
import RestaurantMarker from "./RestaurantMarker";
import { getRestaurantsQuery } from "../services/Firebase";

const DEFAULT_VIEW_STATE = {
  latitude: -8.638077718909088,
  longitude: 115.14939358574861,
  zoom: 12,
  width: "600px",
  height: "600px",
};

function RestaurantMap() {
  const [viewState, setViewState] = React.useState(DEFAULT_VIEW_STATE);
  const [restaurants, setRestaurants] = React.useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRestaurantsQuery();
        setRestaurants(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Map
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      style={{ width: "100%", height: "100vh" }}
      mapStyle="mapbox://styles/amaslakov/clhxcf2am007a01qshqt7bmpx"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
    >
      {restaurants.map(
        (restaurant, i) =>
          restaurant.location && (
            <RestaurantMarker
              key={i}
              restaurant={restaurant}
              onClick={() => setSelectedRestaurant(restaurant)}
              onClose={() => setSelectedRestaurant(null)}
              isSelected={selectedRestaurant === restaurant}
            />
          )
      )}
    </Map>
  );
}

export default RestaurantMap;
