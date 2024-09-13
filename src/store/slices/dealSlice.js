import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dealSelected: false
};

const dealSlice = createSlice({
  name: 'dealSlice',
  initialState,
  reducers: {
    toggleDealSelected: (state) => {
      state.dealSelected = !state.dealSelected;
    } },
});

export const { toggleDealSelected } = dealSlice.actions;
export default dealSlice.reducer;