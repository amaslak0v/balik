import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedLabels: [],
  searchFilterOn: false,
};

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    toggleSearchLabel: (state, action) => {

        const label = action.payload;

        if (state.selectedLabels.includes(label)) {
          state.selectedLabels = state.selectedLabels.filter(item => item !== label);
        } else {
          state.selectedLabels.push(label);
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