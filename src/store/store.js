import { configureStore } from '@reduxjs/toolkit';

import mapReducer from './slices/mapSlice';
import searchReducer from './slices/searchSlice';
import dealReducer from './slices/dealSlice';

const store = configureStore({
  reducer: {
    mapData: mapReducer, 
    searchData: searchReducer,
    dealData: dealReducer
  },
});

export default store;