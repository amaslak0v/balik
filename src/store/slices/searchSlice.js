import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedLabels: []
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
 },
});

export const { toggleSearchLabel } = searchSlice.actions;
export default searchSlice.reducer;