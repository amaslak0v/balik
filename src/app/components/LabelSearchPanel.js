'use client'

import restaurantData from '../assets/ restaurant.json';

export default function LabelSearchPanel({dispatch}){

    const cuisineLabelList = [...new Set(restaurantData.restaurants.map(restaurant => restaurant.cuisine).flat())];

    function handleLabelSelect(){

    }
    function SearchLabel({label}){

        return(
        <div onClick={handleLabelSelect} className="bg-gray-100 p-2 m-3 text-sm rounded-full w-auto h-auto shadow-md">
            {label}
        </div>);

    }

    return (
    <div className="w-full h-auto flex justify-center">

        {cuisineLabelList.map((label, index) => {return(<SearchLabel key={index} label={label}/>)})}
        
    </div>
    );
}


