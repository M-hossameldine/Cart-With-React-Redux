import { createSlice } from '@reduxjs/toolkit';

const initialUiState = {
  cartIsvisible: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUiState,
  reducers: {
    toggle(state) {
      state.cartIsvisible = !state.cartIsvisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
