import React, {useEffect} from 'react';
import { useSelector} from 'react-redux';
import { setSelectedRestaurant } from '../../store/slices/mapSlice.js';



export default function RestaurantCard({restaurant, dispatch}){

    const selectedRestaurant = useSelector((state) => state.mapData.selectedRestaurant)

    function DealTag({tag}){
        return(
            <p className="capitalize inline-block bg-slate-300 p-1 text-xs rounded-xl mr-2 px-2">{tag}</p>
        );
    };

    function handleClick(event){
        dispatch(setSelectedRestaurant(event.currentTarget.id));
    };

    function handleClose(event){
        dispatch(setSelectedRestaurant(null));
    };

    function RegularCard(){

        return( 
        <div onClick={handleClick} id={restaurant.id} className="relative flex-none flex flex-col bg-slate-100 rounded-3xl mx-2 overflow-y-scroll no-scrollbar shadow-xl mb-2 transition-all duration-300 h-48 w-64">
                <img className="h-32 w-full object-cover"  src={restaurant.images} alt={restaurant.name}/>
                <div className="absolute top-3 right-0 z-30 bg-blue-500 rounded-l-xl w-36 text-center text-xs text-white text-semibold py-1">{restaurant.deal[0].marker}     {restaurant.deal[0].shortDescription}!</div>
                <div className="ml-5 grid grid-rows-2 grid-cols-[4fr_1fr]">
                    <div className="col-span-1 row-span-1 text-sm font-medium mt-1 text-nowrap">{restaurant.name}</div>
                    <div className="col-span-1 row-span-1"></div>
                    <div className="col-span-2 row-span-1">
                        {restaurant.deal[0].tags.map(tag => {return(<DealTag key={tag} tag={tag}/>)})}
                    </div>
                </div>
                <div id="information" className="hidden text-xs py-2 px-5 flex-col">
                <p>{restaurant.description}</p>
                <div className="flex flex-col items-center border border-black border-dashed m-4 rounded-lg">
                <h2 className="text-sm font-semibold mt-2 bg-blue-500 w-10 text-center text-white rounded-3xl">Deal</h2>
                <p className="text-xs mt-2">{restaurant.deal[0].description}</p>
                <p className="text-xs mt-2">{restaurant.deal[0].price}</p>
                <img className="w-44 h-44 object-cover my-3" src={restaurant.deal[0].photoUrl}/>
                </div>
                </div>
                
        </div>
        )
    }

    function SelectedCard(){
        return( 
        <div onClick={handleClose} id={restaurant.id} className="relative flex-none flex flex-col bg-slate-100 rounded-3xl mx-2 overflow-y-scroll no-scrollbar shadow-xl mb-2 transition-all duration-300 h-[36rem] w-[44rem]">
                <img className="h-80 w-full object-cover"  src={restaurant.images} alt={restaurant.name}/>
                <div className="absolute top-7 right-0 z-30 bg-blue-500 rounded-l-xl w-auto px-3 text-center text-lg text-white text-semibold py-3">{restaurant.deal[0].marker}     {restaurant.deal[0].shortDescription}!</div>
                <div className="ml-5 grid grid-rows-2 grid-cols-[4fr_1fr]">
                    <div className="col-span-1 row-span-1 text-2xl font-medium my-2 text-nowrap">{restaurant.name}</div>
                    <div className="col-span-1 row-span-1"></div>
                    <div className="col-span-2 row-span-1">
                        {restaurant.deal[0].tags.map(tag => {return(<DealTag key={tag} tag={tag}/>)})}
                    </div>
                </div>
                <div id="information" className="flex text-base px-5 flex-col">
                <p>{restaurant.description}</p>
                <div className="flex flex-col items-center border border-black border-dashed m-4 rounded-lg">
                <h2 className="text-xl font-semibold mt-2 bg-blue-500 text-center p-2 w-auto text-white rounded-3xl">Deal</h2>
                <p className="text-base mt-2">{restaurant.deal[0].description}</p>
                <p className="text-base mt-2">{restaurant.deal[0].price}</p>
                <img className="w-64 h-auto object-cover mt-3 mb-10" src={restaurant.deal[0].photoUrl}/>
                </div>
                </div>
                
        </div>
        )
    };
    


    return (
        <>
        {restaurant.id === selectedRestaurant? <SelectedCard/>:
        <RegularCard/>
        }
        </>
    );
};

