'use client'

import RestaurantCard from '../restaurantCard/RestaurantCard';


export default function RestaurantsPanel({dispatch, currentRestaurantArray }){

  
    return (
    <div className="w-full h-auto flex overflow-x-scroll no-scrollbar items-end">
        {currentRestaurantArray.map(restaurant => {return( <RestaurantCard restaurant={restaurant} dispatch={dispatch}/> )})}
       
    </div>
    );
}