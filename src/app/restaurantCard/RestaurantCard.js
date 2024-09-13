import React from 'react';
import { useSelector} from 'react-redux';
import { setSelectedRestaurant } from '../../store/slices/mapSlice.js';
import { resetDealCards, toggleDealSelected, toggleDealProcessing, toggleDealConfirmed } from '../../store/slices/dealSlice.js';




export default function RestaurantCard({restaurant, dispatch}){

    const selectedRestaurant = useSelector((state) => state.mapData.selectedRestaurant)
    const dealSelected = useSelector((state) => state.dealData.dealSelected)
    const dealProcessing = useSelector((state) => state.dealData.dealProcessing)
    const dealConfirmed = useSelector((state) => state.dealData.dealConfirmed)
    

    function DealTag({tag}){
        return(
            <p className="capitalize inline-block bg-slate-300 p-1 text-xs rounded-xl mr-2 px-2">{tag}</p>
        );
    };

    function handleClick(event){
        dispatch(setSelectedRestaurant(event.currentTarget.id));
    };


    function handleGetDeal(){
        dispatch(toggleDealSelected());
    };

    function handlePurchase(){
        dispatch(toggleDealSelected());
        dispatch(toggleDealProcessing());
        setTimeout(() => {
            dispatch(toggleDealProcessing());
            dispatch(toggleDealConfirmed());
          }, 2000);
    };

    function handleAddToWallet(){
        dispatch(resetDealCards());
        dispatch(setSelectedRestaurant(null));
    };

    function RegularCard(){

        return( 
        <div onClick={handleClick} id={restaurant.id} className="relative flex-none flex flex-col bg-slate-100 rounded-3xl mx-2 overflow-y-scroll no-scrollbar shadow-xl mb-2 transition-all duration-300 h-48 w-64 hover:h-60 group">
                <img className="h-32 w-full object-cover"  src={restaurant.images} alt={restaurant.name}/>
                <div className="absolute top-3 right-0 z-30 bg-blue-500 rounded-l-xl w-36 text-center text-xs text-white text-semibold py-1">{restaurant.deal[0].marker}     {restaurant.deal[0].shortDescription}!</div>
                <div className="ml-5 grid grid-rows-2 grid-cols-[4fr_1fr]">
                    <div className="col-span-1 row-span-1 text-sm font-medium mt-1 text-nowrap">{restaurant.name}</div>
                    <div className="col-span-1 row-span-1"></div>
                    <div className="col-span-2 row-span-1 text-nowrap overflow-hidden">
                        {restaurant.cuisine.filter((item, index) => index < 3).map(tag => {return(<DealTag key={tag} tag={tag}/>)})}
                    </div>
                </div>
                <div id="information" className="hidden text-xs py-2 px-5 flex-col group-hover:flex">
                <p>{restaurant.description}</p>
                </div>
                
        </div>
        )
    }

    function SelectedCard() {
        return (
          <>
            {(() => {
              switch (true) {
                case dealSelected:
                  return <DealCard />;
                case dealProcessing:
                  return <DealProcessingCard />;
                case dealConfirmed:
                  return <DealConfirmationCard />;
                default:
                  return <SelectedRestaurantCard />;
              }
            })()}
          </>
        );
      }

    function SelectedRestaurantCard(){
        return(
            <div id={restaurant.id} className="relative flex-none flex flex-col bg-slate-100 rounded-3xl mx-2 overflow-y-scroll no-scrollbar shadow-xl mb-2 transition-all duration-300 h-[36rem] w-[44rem] click:translate-x-full">
            <img className="h-80 w-full object-cover"  src={restaurant.images} alt={restaurant.name}/>
            <div className="absolute top-7 right-0 z-30 bg-blue-500 rounded-l-xl w-auto px-3 text-center text-lg text-white text-semibold py-3">{restaurant.deal[0].marker}     {restaurant.deal[0].shortDescription}!</div>
            <div className="ml-5 grid grid-rows-2 grid-cols-[4fr_1fr]">
                <div className="col-span-1 row-span-1 text-2xl font-medium my-2 text-nowrap">{restaurant.name}</div>
                <div className="col-span-1 row-span-1"></div>
                <div className="col-span-2 row-span-1">
                    {restaurant.cuisine.map(tag => {return(<DealTag key={tag} tag={tag}/>)})}
                </div>
            </div>
            <div id="information" className="flex text-base px-5 flex-col">
            <p>{restaurant.description}</p>
            <div className="flex flex-col items-center border border-black border-dashed m-4 rounded-lg">
            <h2 className="text-xl font-semibold mt-2 bg-blue-500 text-center p-2 w-auto text-white rounded-3xl">Deal</h2>
            <p className="text-base mt-2">{restaurant.deal[0].description}</p>
            <p className="text-base mt-2">{restaurant.deal[0].price}</p>
            <img className="w-64 h-auto object-cover mt-3 mb-5" src={restaurant.deal[0].photoUrl}/>
            <button onClick={handleGetDeal} className="text-xl font-semibold mb-5 bg-lime-500 text-center p-2 w-auto text-white rounded-3xl">Get Deal!</button>
            </div>
            </div>
    </div>
        );
    };

    function DealCard(){
        return( 
            <div id={restaurant.id} className="relative flex flex-col bg-slate-100 rounded-3xl mx-2 overflow-y-scroll no-scrollbar shadow-xl mb-2 transition-all duration-300 h-[36rem] w-[44rem] click:translate-x-full">
                <div className="flex items-center justify-center min-h-20 w-full bg-black text-3xl">
                    <h2 className="text-white">Purchase Deal</h2>
                </div>
                <div id="information" className="flex text-base px-5 flex-col items-center">
               
                <div className="flex gap-1 flex-col items-center m-8 rounded-lg h-[25rem] w-[80%]">
                    <div className="flex items-center justify-center h-[20%] w-full bg-lime-300">
                        <h2 className="text-xl font-bold ">Your Order</h2>
                    </div>
                    <div className="flex items-center justify-left h-[15%] w-full bg-lime-200 ">
                        <p className="ml-16">@ {restaurant.name}</p>
                    </div>
                    <div className="flex items-center justify-between h-[35%] w-full bg-lime-200 ">
                        <p className="ml-16">{restaurant.deal[0].description}</p>
                        <p className="mr-16">{restaurant.deal[0].price}.00</p>
                    </div>
                    <div className="flex items-center justify-between h-[30%] w-full bg-lime-200 text-xl font-bold">
                        <p className="ml-16">Total</p>
                        <p className="mr-16">{restaurant.deal[0].price}.00</p>
                    </div>
                </div>

                <div className="flex gap-1 flex-col items-center m-8 rounded-lg h-[36rem] w-[80%]">
                    <div className="flex items-center justify-center h-[15%] w-full bg-lime-300">
                        <h2 className="text-xl font-bold">Your Details</h2>
                    </div>
                    <div className="flex items-center justify-between h-[85%] w-full bg-lime-200 px-8">
                        <form className="flex flex-col gap-4 w-full p-4">
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1" htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName" className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-lime-500 outline-none" placeholder="Enter your first name"/>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1" htmlFor="surname">Surname</label>
                            <input type="text" id="surname" name="surname" className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-lime-500 outline-none" placeholder="Enter your surname"/>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1" htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-lime-500 outline-none" placeholder="Enter your email"/>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1" htmlFor="mobile">Mobile</label>
                            <input type="tel" id="mobile" name="mobile" className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-lime-500 outline-none" placeholder="Enter your mobile number"/>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1" htmlFor="promoCode">Promo Code</label>
                            <input type="text" id="promoCode" name="promoCode" className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-lime-500 outline-none" placeholder="Enter your promo code"/>
                        </div>
                        
                        </form>
                    </div>
                </div>

                <div className="flex gap-1 flex-col items-center m-8 rounded-lg h-[25rem] w-[80%]">
                <div className="flex items-center justify-center h-[15%] w-full bg-lime-300">
                    <h2 className="text-xl font-bold">Payment</h2>
                </div>
                <div className="flex items-center justify-center h-[85%] w-full bg-lime-200">
                    <form className="flex flex-col gap-4 w-full px-8 py-4">
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold mb-1" htmlFor="cardholderName">Cardholder Name</label>
                        <input type="text" id="cardholderName" name="cardholderName" className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-lime-500 outline-none" placeholder="E.g. John Doe" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold mb-1" htmlFor="cardNumber">Card Number</label>
                        <input type="text" id="cardNumber" name="cardNumber" className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-lime-500 outline-none" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col w-1/2">
                        <label className="text-sm font-semibold mb-1" htmlFor="expiryDate">Expiry Date</label>
                        <input type="text" id="expiryDate" name="expiryDate" className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-lime-500 outline-none" placeholder="MM/YY" />
                        </div>
                        <div className="flex flex-col w-1/2">
                        <label className="text-sm font-semibold mb-1" htmlFor="cvv">CVV</label>
                        <input type="text" id="cvv" name="cvv" className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-lime-500 outline-none" placeholder="123" />
                        </div>
                    </div>
                    <button onClick={handlePurchase} className="bg-black text-white font-bold py-3 rounded-lg hover:bg-lime-600 transition-colors">
                        Pay and Process Order
                    </button>
                    </form>
                </div>
                </div>
                </div>
                
        </div>
            )
    };

    function DealProcessingCard(){
        return(
            <div id={restaurant.id} className="relative flex flex-col bg-slate-100 rounded-3xl mx-2 overflow-y-scroll no-scrollbar shadow-xl mb-2 transition-all duration-300 h-[36rem] w-[44rem] click:translate-x-full">
            <div className="flex items-center justify-center min-h-20 w-full bg-black text-3xl">
                <h2 className="text-white">Deal Processing</h2>
            </div>
            <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-60 w-60 border-t-2 border-b-8 mt-28 border-lime-500"></div>
            </div>
            <div id="information" className="flex text-base px-5 flex-col items-center"></div></div>

        )
    }

    function DealConfirmationCard(){
        return(
            <div id={restaurant.id} className="relative flex flex-col bg-slate-100 rounded-3xl mx-2 overflow-y-scroll no-scrollbar shadow-xl mb-2 transition-all duration-300 h-[36rem] w-[44rem] click:translate-x-full">
            <div className="flex items-center justify-center min-h-20 w-full bg-black text-3xl">
                <h2 className="text-white">Order Confirmed</h2>
            </div>
            <div className="flex text-base px-5 flex-col items-center justify-center">
                <p className="mt-3 italic">This coupon has been sent to your email address</p>
                <div className="flex flex-col items-center justify-center p-12 h-[23rem] w-[23rem] bg-blue-300 mt-5 border-4 border-dashed border-black">
                    <h2 className="font-bold text-2xl">Your Deal Coupon</h2>
                    <h3 className="m-10 text-lg">@ {restaurant.name}</h3>
                    <h3 className="mb-10 text-lg text-center">{restaurant.deal[0].description}</h3>
                    <h2 className="font-bold text-xl">Deal ID: 12341789</h2>
                    <h2 className="font-bold text-xl">Deal Secret: sun fish island</h2>
                </div>
                <button onClick={handleAddToWallet} className="bg-blue-600 text-white font-bold rounded-lg mt-4 p-3 hover:bg-lime-600 transition-colors">
                        Add to Deals Wallet
                    </button>
            </div>
            
            </div>
            
        )
    }
    


    return (
        <>
        {restaurant.id === selectedRestaurant? (<SelectedCard/>) : (<RegularCard/>) }
        </>
    );
};


