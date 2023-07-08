import { IDataProvider, Restaurant, RestaurantData } from './dataModels';
import restaurantsData from './restaurants.json';

export class LocalDataProvider implements IDataProvider {
    async getRestaurants(): Promise<Restaurant[]> {
        // Simulating delay
        await new Promise(resolve => setTimeout(resolve, 200));
        const data: RestaurantData = restaurantsData as RestaurantData;
        return data.restaurants;
    }
}
