"use client";

import { PiBowlFoodBold } from "react-icons/pi";
import { GrTicket } from "react-icons/gr";





export default function NavigationBar({value}){

    return (
        <div className="text-black bg-white h-16 flex justify-around items-center">
            <div className="flex flex-col items-center justify-center">
                <PiBowlFoodBold className="text-3xl font-extrabold"/>
                <p className="text-xs">Eat</p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <GrTicket  className="text-3xl font-extrabold"/>
                <p className="text-xs">Deals</p>
            </div>


        </div>
    );

}