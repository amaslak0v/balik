'use client'

import restaurantData from '../assets/ restaurant.json';
import RestaurantCard from '../restaurantCard/RestaurantCard';
import  { setSearchFilterOn, setSearchFilterOff } from '../../store/slices/searchSlice'
import { useSelector } from 'react-redux';
import {useEffect} from 'react';


export default function RestaurantsPanel({dispatch, currentRestaurantArray }){

  
    return (
    <div className="w-full h-auto flex overflow-x-scroll no-scrollbar items-end">
        {currentRestaurantArray.map(restaurant => {return( <RestaurantCard restaurant={restaurant} dispatch={dispatch}/> )})}
       
    </div>
    );
}