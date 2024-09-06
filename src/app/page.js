'use client';

import Image from "next/image";
import Map from "./components/Map.js";
import NavigationBar from "./components/NavigationBar.js";
import RestaurantsPanel from "./components/RestaurantsPanel.js";
import RestaurantCard from './restaurantCard/RestaurantCard.js';
import Search from "./components/Search.js"
import restaurantData from './assets/ restaurant.json';

import { useSelector, useDispatch } from 'react-redux';
import { setSelectedRestaurant } from '../store/slices/mapSlice.js';


export default function Home() {

  const dispatch = useDispatch();
  const selectedRestaurantId = useSelector((state) => state.mapData.selectedRestaurant)

  console.log('in page', selectedRestaurantId)

  function handleClose(event){
    dispatch(setSelectedRestaurant(null));
};

  return (
    <>
       
      <div className="relative w-full h-screen overflow-hidden">

      
      {selectedRestaurantId && <div onClick={handleClose} className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-40 z-30"></div>}


        <Map dispatch={dispatch}/>
        <div className="absolute top-6 z-10 left-1/2 transform -translate-x-1/2">
        <Search/> 
        </div>   
      
        {selectedRestaurantId ? <div className="absolute top-28 z-40 left-1/2 transform -translate-x-1/2"> <RestaurantCard  restaurant={restaurantData.restaurants[selectedRestaurantId]} dispatch={dispatch}/></div> 
        : 
        null
  }
  
     {!selectedRestaurantId && <div className="absolute bottom-16 left-0 z-20 w-full overflow-x-scroll">
        <RestaurantsPanel dispatch={dispatch} selectedRestaurantId={selectedRestaurantId}/>
      </div>}

        <div className="absolute bottom-0 left-0 z-30 w-full">
        <NavigationBar dispatch={dispatch}/>
        </div>

      </div>

  
    </>
  );
}
