import { configureStore } from '@reduxjs/toolkit';

import mapReducer from './slices/mapSlice';

const store = configureStore({
  reducer: {
    mapData: mapReducer,  // Add your slice reducers here
  },
});

export default store;