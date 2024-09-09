'use client'

import restaurantData from '../assets/ restaurant.json';
import RestaurantCard from '../restaurantCard/RestaurantCard';
import { useSelector } from 'react-redux';


export default function RestaurantsPanel({dispatch, selectedRestaurantId}){

    const selectedSearchLabels = useSelector((state) => state.searchData.selectedLabels)

    let restaurantArray = restaurantData.restaurants.filter((restaurant) => restaurant.id !== selectedRestaurantId);

    let filteredArray = restaurantArray.filter(restaurant => 
        restaurant.cuisine.some(cuisineLabel => selectedSearchLabels.includes(cuisineLabel))
      );

    console.log(filteredArray);


    return (
    <div className="w-full h-auto flex overflow-x-scroll no-scrollbar items-end">
        {filteredArray.map(restaurant => {return( <RestaurantCard restaurant={restaurant} dispatch={dispatch}/> )})}
       
    </div>
    );
}