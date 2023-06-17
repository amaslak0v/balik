import React from 'react';
import { Marker } from 'react-map-gl';

function RestaurantMarker({ restaurant, onClick }) {
  const restaurantName = restaurant.name;

  return (
    <Marker
      longitude={restaurant.location._long}
      latitude={restaurant.location._lat}
      anchor='center'
    >
      <div
        onClick={onClick}
        style={{
          height: '50px',
          width: '50px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          cursor: 'pointer',
        }}
      >
        📍 {restaurantName}
      </div>
    </Marker>
  );
}

export default RestaurantMarker;
