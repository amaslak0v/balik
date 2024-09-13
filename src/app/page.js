'use client';

import Map from "./components/Map.js";
import NavigationBar from "./components/NavigationBar.js";
import RestaurantsPanel from "./components/RestaurantsPanel.js";
import RestaurantCard from './restaurantCard/RestaurantCard.js';
import restaurantData from './assets/ restaurant.json';
import LabelSearchPanel from "./components/LabelSearchPanel.js";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedRestaurant } from '../store/slices/mapSlice.js';
import  { setSearchFilterOn, setSearchFilterOff } from '../store/slices/searchSlice'
import { toggleDealSelected } from '../store/slices/dealSlice.js';


export default function Home() {

  const dispatch = useDispatch();
  const selectedRestaurantId = useSelector((state) => state.mapData.selectedRestaurant)
  const selectedSearchLabels = useSelector((state) => state.searchData.selectedSearchLabels)

  function handleClose() {
    dispatch(setSelectedRestaurant(null));
    dispatch(toggleDealSelected());
  };
  
    const searchFilterOn = useSelector((state) => state.searchData.searchFilterOn)

    let restaurantArray = restaurantData.restaurants.filter((restaurant) => restaurant.id !== selectedRestaurantId);

    let filteredArray = restaurantArray.filter(restaurant => 
        restaurant.cuisine.some(cuisineLabel => selectedSearchLabels.includes(cuisineLabel))
      );

    const currentRestaurantArray = searchFilterOn ? filteredArray : restaurantArray;
    
    useEffect(() => {
        if (selectedSearchLabels.length !== 0) {
          dispatch(setSearchFilterOn());
        } else {
          dispatch(setSearchFilterOff());
        }
      }, [selectedSearchLabels, dispatch]);



  return (
    <>
       
      <div className="relative w-full h-screen overflow-hidden">

      
      {selectedRestaurantId && <div onClick={handleClose} className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-40 z-30"></div>}


        <Map dispatch={dispatch} currentRestaurantArray={currentRestaurantArray}/>

        <div className="absolute top-10 left-0 z-20 w-full overflow-x-scroll no-scrollbar bg-transparent">
        <LabelSearchPanel dispatch={dispatch} currentRestaurantArray={currentRestaurantArray}/>
        </div>
      
        {selectedRestaurantId ? <div className="absolute top-28 z-40 left-1/2 transform -translate-x-1/2"> <RestaurantCard  restaurant={restaurantData.restaurants[selectedRestaurantId]} dispatch={dispatch}/></div> 
        : 
        null
  }
  
     {!selectedRestaurantId && <div className="absolute bottom-16 left-0 z-20 w-full overflow-x-scroll no-scrollbar">
        <RestaurantsPanel dispatch={dispatch} currentRestaurantArray={currentRestaurantArray}/>
      </div>}

        <div className="absolute bottom-0 left-0 z-30 w-full">
        <NavigationBar dispatch={dispatch}/>
        </div>

      </div>

  
    </>
  );
}
