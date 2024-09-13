import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dealSelected: false,
  dealProcessing: false,
  dealConfirmed: false,
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