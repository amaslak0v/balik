import React, { useState, useEffect, useCallback } from "react";
import Map from "react-map-gl";
import dataProvider from "../../data/mainDataProvider";
import { Restaurant, Deal } from "../../data/dataModels"; 
import DealMarker from "./DealMarker";


// Custom hook to fetch restaurant data from the data provider
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

// A component to render all the deal markers for a restaurant
const RestaurantDealMarkers: React.FC<{ restaurant: Restaurant; onClick: (deal: Deal) => void; }> = ({ restaurant, onClick }) => {
  return (
    <>
      {restaurant.deal?.map((deal, index) => (
        <DealMarker
          key={index}
          deal={deal}
          location={restaurant.location}
          onClick={() => onClick(deal)}
        />
      ))}
    </>
  );
};

const initialViewState = {
      latitude: -8.638077718909088,
      longitude: 115.14939358574861,
      zoom: 14,
      width: "100%",
      height: "100vh",
    }

const DealMap: React.FC = () => {
  const [settings, setSettings] = useState({
    scrollZoom: true,
    boxZoom: true,
    dragRotate: true,
    dragPan: true,
    keyboard: true,
    doubleClickZoom: true,
    touchZoomRotate: true,
    touchPitch: true,
    minZoom: 0,
    maxZoom: 20,
    minPitch: 0,
    maxPitch: 85
  });

  const { restaurants, error } = useFetchRestaurants();

  const handleMarkerClick = useCallback((deal: Deal, restaurant: Restaurant) => {
    // handle marker click here
    // setSelectedDeal(deal); // example of what you might do
  }, []);


  if (error) {
    return <div>Error: {error.message}</div>; // Display the error message
  }

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Map
        initialViewState={initialViewState}
        {...settings}
        mapStyle="mapbox://styles/amaslakov/clhxcf2am007a01qshqt7bmpx"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      >
        {restaurants?.map((restaurant) => (
          <RestaurantDealMarkers
            key={restaurant.id}
            restaurant={restaurant}
            onClick={(deal) => handleMarkerClick(deal, restaurant)}
          />
        ))}
      </Map>
    </div>
  );
};

export default DealMap;
