import { createSlice } from "@reduxjs/toolkit";

//Interfaces
import { IToaster } from "../../cors/InterFaces/InterFaces";

const initialState: IToaster = {
  toast: false,
  message: "",
};

export const ToasterSlice = createSlice({
  name: "toaster",
  initialState,
  reducers: {
    showToaster: (currentState) => {
      currentState.toast = true;
    },
    hideToaster: (currentState) => {
      currentState.toast = false;
    },
    changeMessage: (currentState, action) => {
      currentState.message = action.payload;
    },
  },
});

export const { showToaster, hideToaster, changeMessage } = ToasterSlice.actions;

export default ToasterSlice.reducer;
