'use client'

import restaurantData from '../assets/ restaurant.json';
import  { toggleSearchLabel } from '../../store/slices/searchSlice'
import { useSelector } from 'react-redux';

export default function LabelSearchPanel({dispatch}){

    const cuisineLabelList = [...new Set(restaurantData.restaurants.map(restaurant => restaurant.cuisine).flat())];

    const selectedSearchLabels = useSelector((state) => state.searchData.selectedLabels)

    function handleLabelSelect(e){
        const label = e.target.getAttribute("data-label");
        dispatch(toggleSearchLabel(label));
    }
    function SearchLabel({label}){

        const isSelected = selectedSearchLabels.includes(label);

        return(
        <div onClick={handleLabelSelect} data-label={label} className={`p-2 m-3 text-sm rounded-full w-auto h-auto shadow-md cursor-pointer text-nowrap transition-colors duration-300 ease-in-out ${isSelected ? 'bg-gray-400 text-white' : 'bg-gray-100 hover:bg-gray-300'}`}>
            {label}
        </div>);

    }

    return (
    <div className="w-full h-auto flex justify-center">

        {cuisineLabelList.map((label, index) => {return(<SearchLabel key={index} label={label}/>)})}
        
    </div>
    );
}


