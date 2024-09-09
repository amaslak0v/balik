'use client'

import restaurantData from '../assets/ restaurant.json';

export default function LabelSearchPanel({dispatch}){

    const cuisineLabelList = restaurantData.restaurants.map(restaurant => restaurant.cuisine[0])

    return (
    <div className="w-full h-auto flex items-end">

        {cuisineLabelList.map(label => {return(<p>{label}</p>)})}
        
    </div>
    );
}


