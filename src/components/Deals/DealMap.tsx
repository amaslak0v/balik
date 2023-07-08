import React, { useState, useEffect, useRef, useCallback } from "react";
import Map from "react-map-gl";
import dataProvider from "../../data/mainDataProvider";
import { Restaurant, Deal } from "../../data/dataModels"; 
import DealMarker from "./DealMarker";

interface ViewState {
  latitude: number;
  longitude: number;
  zoom: number;
  width?: string;
  height?: string;
}

const DEFAULT_VIEW_STATE: ViewState = {
  latitude: -8.638077718909088,
  longitude: 115.14939358574861,
  zoom: 12,
  width: "600px",
  height: "600px",
};

// Custom hook for fetching restaurant data
const useFetchRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedRestaurants = await dataProvider.getRestaurants();
        setRestaurants(fetchedRestaurants);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return { restaurants, error };
};

const DealMap: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>(DEFAULT_VIEW_STATE);
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);

  const { restaurants, error } = useFetchRestaurants();

  const mapRef = useRef<Map>(null); // Update your ref type to be Map from "react-map-gl"

  const handleMarkerClick = useCallback((deal: Deal, restaurant: Restaurant) => {
    setSelectedDeal(deal);
    const map = mapRef.current?.getMap(); 
    if (map) {
      map.flyTo({
        latitude: restaurant.location.latitude,
        longitude: restaurant.location.longitude,
        zoom: 15,
        duration: 2000,
      });
    }
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>; // Display the error message
  }

  return (
    <div style={{ display: "flex", width: "100%", height: "100vh" }}>
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        ref={mapRef}
        style={{ flex: 1 }}
        mapStyle="mapbox://styles/amaslakov/clhxcf2am007a01qshqt7bmpx"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      >
        {restaurants?.map((restaurant) =>
          restaurant.deals?.map((deal, index) => (
            <DealMarker
              key={index}
              deal={deal}
              location={restaurant.location}
              onClick={() => handleMarkerClick(deal, restaurant)}
            />
          )),
        )}
      </Map>
    </div>
  );
};

export default DealMap;
