import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedRestaurant: null,
  mapInstance: null
};

const mapSlice = createSlice({
  name: 'mapSlice',
  initialState,
  reducers: {
    setSelectedRestaurant: (state, action) => {
      state.selectedRestaurant = action.payload;
    },
    setMapInstance:(state, action) => {
      state.mapInstance = action.payload;
    }  },
});

export const { setSelectedRestaurant, setMapInstance } = mapSlice.actions;
export default mapSlice.reducer;