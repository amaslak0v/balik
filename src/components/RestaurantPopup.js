import * as React from 'react';

function RestaurantPopup({ restaurant, onClose }) {
  if (!restaurant) {
    return null;
  }

  return (
    <div style={{ width: '50%', padding: '1em', overflowY: 'auto' }}>
      <button onClick={onClose}>Close</button>
      <h2>{restaurant.name}</h2>
      <p>{restaurant.description}</p>
      <img src={restaurant.image} alt={restaurant.name} style={{ width: '100px' }} />
    </div>
  );
}

export default RestaurantPopup;

