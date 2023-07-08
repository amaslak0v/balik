import { IDataProvider } from './dataModels';
import { LocalDataProvider } from './LocalDataProvider';
import { FirebaseDataProvider } from './FirebaseDataProvider';

let dataProvider: IDataProvider;

if (process.env.NODE_ENV === 'development') {
    dataProvider = new LocalDataProvider();
} else {
    dataProvider = new FirebaseDataProvider();
}

// Now, whenever you need to fetch restaurants:
dataProvider.getRestaurants().then(restaurants => {
    console.log(restaurants);
});

export default dataProvider