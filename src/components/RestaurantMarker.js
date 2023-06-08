import * as React from 'react';
import {Marker, Popup} from 'react-map-gl';

function RestaurantMarker({ restaurant, onClick, onClose, isSelected }) {
  return (
    <React.Fragment>
      <Marker 
        longitude={restaurant.location._long} 
        latitude={restaurant.location._lat} 
        anchor="center"
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
            cursor: 'pointer'
          }}
        >
          📍
        </div>
      </Marker>
      
      {isSelected && (
        <Popup
          latitude={restaurant.location._lat}
          longitude={restaurant.location._long}
          onClose={onClose}
        >
          <div>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.description}</p>
            <img src={restaurant.image} alt={restaurant.name} style={{ width: "100px" }}/>
          </div>
        </Popup>
      )}
    </React.Fragment>
  );
}

export default RestaurantMarker;

