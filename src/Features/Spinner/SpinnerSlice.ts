import { createSlice } from "@reduxjs/toolkit";

const initialState: { isLoading: boolean } = {
  isLoading: false,
};

export const spinnerSlice = createSlice({
  name: "spinner",
  initialState,
  reducers: {
    hideSpinner: (currentState) => {
      currentState.isLoading = false;
    },
    showSpinner: (currentState) => {
      currentState.isLoading = true;
    },
  },
});

export const { showSpinner, hideSpinner } = spinnerSlice.actions;
export default spinnerSlice.reducer;
