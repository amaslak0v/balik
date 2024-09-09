import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedSearchLabels: [],
  searchFilterOn: false,
};

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    toggleSearchLabel: (state, action) => {

        const label = action.payload;

        if (state.selectedSearchLabels.includes(label)) {
          state.selectedSearchLabels = state.selectedSearchLabels.filter(item => item !== label);
        } else {
          state.selectedSearchLabels.push(label);
        }
      },
    setSearchFilterOn: (state) => {
        state.searchFilterOn = true;
    },
    setSearchFilterOff: (state) => {
        state.searchFilterOn = false;
    }
 },
});

export const { toggleSearchLabel, setSearchFilterOn, setSearchFilterOff } = searchSlice.actions;
export default searchSlice.reducer;