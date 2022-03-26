import { createSlice } from '@reduxjs/toolkit';

const initialUiState = { cartIsvisible: false, notification: null };

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUiState,
  reducers: {
    toggle(state) {
      state.cartIsvisible = !state.cartIsvisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    hideNotification(state) {
      state.notification = null;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
