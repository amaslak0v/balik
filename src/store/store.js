import { configureStore } from '@reduxjs/toolkit';

import mapReducer from './slices/mapSlice';
import searchReducer from './slices/searchSlice';

const store = configureStore({
  reducer: {
    mapData: mapReducer, 
    searchData: searchReducer,
  },
});

export default store;