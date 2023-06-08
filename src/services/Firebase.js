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
export const db = getFirestore(app)

export const getRestaurantsQuery = async () => {
  const restaurantsCollection = query(collection(db, "restaurants"))
  const querySnapshot = await getDocs(restaurantsCollection);
  
  // Initialize an array to hold the documents
  let documents = [];

  querySnapshot.forEach((doc) => {
    // Push each document into the array
    documents.push(doc.data());
  });

  // Return the array of documents
  return documents;
}
