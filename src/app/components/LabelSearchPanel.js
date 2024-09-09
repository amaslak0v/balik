'use client'

import restaurantData from '../assets/ restaurant.json';

export default function LabelSearchPanel({dispatch}){

    const cuisineLabelList = [...new Set(restaurantData.restaurants.map(restaurant => restaurant.cuisine).flat())];

    function SearchLabel({label}){

        return(
        <div className="bg-gray-100 p-2 m-3 text-sm rounded-full w-auto h-auto shadow-md">
            {label}
        </div>);

    }

    return (
    <div className="w-full h-auto flex justify-center">

        {cuisineLabelList.map(label => {return(<SearchLabel label={label}/>)})}
        
    </div>
    );
}


