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
    },
    toggleDealProcessing: (state) => {
        state.dealProcessing = !state.dealProcessing;
      },
    toggleDealConfirmed: (state) => {
      state.dealConfirmed = !state.dealConfirmed;
    },
    resetDealCards: (state) => {
        state.dealSelected = false;
        state.dealProcessing = false;
        state.dealConfirmed = false;
      }   },
});

export const { resetDealCards, toggleDealSelected, toggleDealProcessing, toggleDealConfirmed } = dealSlice.actions;
export default dealSlice.reducer;