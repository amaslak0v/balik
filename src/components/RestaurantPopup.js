import * as React from "react";

function RestaurantDetails({ restaurant, onClose }) {
  if (!restaurant) {
    return null;
  }

  return (
    <div className="w-1/2 p-4 overflow-auto bg-white rounded-lg shadow-md">
      <img
        className="w-full h-64 object-cover rounded-t-lg mb-4"
        src={restaurant.image}
        alt={restaurant.name}
      />
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">{restaurant.name}</h2>
        <p className="mb-2">{restaurant.description}</p>
        {restaurant.tags &&
          restaurant.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        <a
          href={restaurant.google_map_link}
          className="text-blue-500 hover:underline"
        >
          View on Google Maps
        </a>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
}

export default RestaurantDetails;
