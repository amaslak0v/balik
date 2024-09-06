'use client'

import React, { useEffect, useState, useRef } from 'react';
import restaurantData from '../assets/ restaurant.json';
import mapboxgl from 'mapbox-gl';
import RestaurantCard from '../restaurantCard/RestaurantCard';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useSelector} from 'react-redux';
import { setSelectedRestaurant, setMapInstance } from '../../store/slices/mapSlice.js';


mapboxgl.accessToken = 'pk.eyJ1IjoiYXZlbmR1bSIsImEiOiJjbHp6aHBkNjExZ21xMmtwZ25naWR2YTBhIn0.G1J-yLq_atEuOH51EJJ9ug';

export default function MapComponent({dispatch}) {
    const mapContainerRef = useRef(null);
    const selectedRestaurant = useSelector((state) => state.mapData.selectedRestaurant)

    useEffect(() => {
        const mapInstance = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [115.150, -8.65],
            zoom: 13,
            minZoom: 10,
            maxZoom: 16,
        });

        restaurantData.restaurants.forEach((restaurant) => {
            const markerElement = document.createElement('div');
            markerElement.innerHTML = restaurant.marker;
            markerElement.style.fontSize = '24px';
            markerElement.style.cursor = 'pointer';

            new mapboxgl.Marker(markerElement)
                .setLngLat([restaurant.location.longitude, restaurant.location.latitude])
                .addTo(mapInstance)
                .getElement()
                .addEventListener('click', (e) => {
                    e.stopPropagation();
                    dispatch(setSelectedRestaurant(restaurant.id));
                    
                });
        });

        dispatch(setMapInstance(mapInstance));

        return () => mapInstance.remove();
    }, []);


    return (
        <div className="absolute top-0 left-0 w-full h-full z-10"
                ref={mapContainerRef}>
        </div>
    );
};