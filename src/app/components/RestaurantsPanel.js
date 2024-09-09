'use client'

import restaurantData from '../assets/ restaurant.json';
import RestaurantCard from '../restaurantCard/RestaurantCard';
import  { setSearchFilterOn, setSearchFilterOff } from '../../store/slices/searchSlice'
import { useSelector } from 'react-redux';
import {useEffect} from 'react';


export default function RestaurantsPanel({dispatch, selectedRestaurantId}){

    const selectedSearchLabels = useSelector((state) => state.searchData.selectedSearchLabels)
    const searchFilterOn = useSelector((state) => state.searchData.searchFilterOn)

    let restaurantArray = restaurantData.restaurants.filter((restaurant) => restaurant.id !== selectedRestaurantId);

    let filteredArray = restaurantArray.filter(restaurant => 
        restaurant.cuisine.some(cuisineLabel => selectedSearchLabels.includes(cuisineLabel))
      );

    console.log(filteredArray);


    useEffect(() => {
        if (selectedSearchLabels.length !== 0) {
          dispatch(setSearchFilterOn());
        } else {
          dispatch(setSearchFilterOff());
        }
      }, [selectedSearchLabels, dispatch]);

    console.log("searchfilteron?", searchFilterOn)
    console.log('selectedsearchlabels', selectedSearchLabels)

    const currentArray = searchFilterOn ? filteredArray : restaurantArray;

    return (
    <div className="w-full h-auto flex overflow-x-scroll no-scrollbar items-end">
        {currentArray.map(restaurant => {return( <RestaurantCard restaurant={restaurant} dispatch={dispatch}/> )})}
       
    </div>
    );
}