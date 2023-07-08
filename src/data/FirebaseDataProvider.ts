import { IDataProvider, Restaurant } from './dataModels';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyA1VvYEECOlvpdKOeNa8RBr1y_YXl532WY",
    authDomain: "balik-387304.firebaseapp.com",
    projectId: "balik-387304",
    storageBucket: "balik-387304.appspot.com",
    messagingSenderId: "969919136672",
    appId: "1:969919136672:web:d06cc72d4c6227e5039ac5",
    measurementId: "G-2XWFEHNR6Y",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export class FirebaseDataProvider implements IDataProvider {
    async getRestaurants(): Promise<Restaurant[]> {
        // We will fetch the data from Firestore
        const restaurantsCollection = collection(db, 'restaurants');
        const restaurantsSnapshot = await getDocs(restaurantsCollection);
        const restaurants = restaurantsSnapshot.docs.map(doc => doc.data() as Restaurant);
        return restaurants;
    }
}
