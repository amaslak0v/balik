export interface Location {
    latitude: number;
    longitude: number;
  }
  
  export interface Deal {
    name: string;
    description: string;
    shortDescription: string;
    photoUrl: string;
    price: string;
    tags: string[];
    marker: string;
  }
  
  export interface Restaurant {
    id: string;
    name: string;
    description: string;
    images: string[];
    marker: string;
    googleMapUrl: string;
    address: string;
    location: Location;
    tags: string[];
    deal: Deal[];
  }
  
  export interface RestaurantData {
    restaurants: Restaurant[];
  }
  
  export interface IDataProvider {
    getRestaurants: () => Promise<Restaurant[]>;
  }
  