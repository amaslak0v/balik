'use client';

mapboxgl.accessToken = 'pk.eyJ1IjoiYXZlbmR1bSIsImEiOiJjbHp6aHBkNjExZ21xMmtwZ25naWR2YTBhIn0.G1J-yLq_atEuOH51EJJ9ug';

import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { setSelectedRestaurant } from '../../store/slices/mapSlice.js';


export default function MapComponent({ dispatch, currentRestaurantArray }) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null); 
  const markersRef = useRef([]); 

  useEffect(() => {

    if (!mapInstanceRef.current) {
      mapInstanceRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [115.150, -8.65],
        zoom: 13,
        minZoom: 10,
        maxZoom: 16,
      });
    }

    const mapInstance = mapInstanceRef.current;

    // Remove existing markers
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = []; 


    currentRestaurantArray.forEach((restaurant) => {
      const markerElement = document.createElement('div');
      markerElement.innerHTML = restaurant.marker;
      markerElement.style.fontSize = '24px';
      markerElement.style.cursor = 'pointer';

      const marker = new mapboxgl.Marker(markerElement)
        .setLngLat([restaurant.location.longitude, restaurant.location.latitude])
        .addTo(mapInstance);

      markerElement.addEventListener('click', (e) => {
        e.stopPropagation();
        dispatch(setSelectedRestaurant(restaurant.id));
      });

      markersRef.current.push(marker); // Store marker in ref to remove later
    });

    // Cleanup markers when component unmounts
    return () => {
      markersRef.current.forEach((marker) => marker.remove());
    };
  }, [currentRestaurantArray, dispatch]); // Run effect when currentRestaurantArray changes

  return (
    <div className="absolute top-0 left-0 w-full h-full z-10" ref={mapContainerRef}></div>
  );
}