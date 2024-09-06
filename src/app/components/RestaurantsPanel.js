'use client'

import restaurantData from '../assets/ restaurant.json';
import RestaurantCard from '../restaurantCard/RestaurantCard';


export default function RestaurantsPanel({dispatch, selectedRestaurantId}){

    let restaurantArray = restaurantData.restaurants.filter((restaurant) => restaurant.id !== selectedRestaurantId);


    return (
    <div className="w-full h-auto flex overflow-x-scroll no-scrollbar items-end">
        {restaurantArray.map(restaurant => {return( <RestaurantCard restaurant={restaurant} dispatch={dispatch}/> )})}
       
    </div>
    );
}