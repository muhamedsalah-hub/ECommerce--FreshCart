//React Redux
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Api Calls
import { SignUp } from "../../cors/services/SignUp";

//Interfaces
import {
  IAuthUser,
  IRegisterationUserData,
} from "../../cors/InterFaces/InterFaces";

export const UserRegisterationApi = createAsyncThunk(
  "UserRegisterationApi",
  async (
    RegisterationUserData: IRegisterationUserData,
    { rejectWithValue }
  ) => {
    try {
      const user = await SignUp(RegisterationUserData);
      return user.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState: IAuthUser = {
  message: "",
  user: {
    name: "",
    email: "",
    role: "",
  },
  token: "",
};

const UserRegisterationSlice = createSlice({
  name: "UserRegisteration",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(UserRegisterationApi.fulfilled, (currentState, action) => {
      currentState.message = "User Registeration is successfully done";
      currentState.user = action.payload.user;
      currentState.token = action.payload.token;
    });
  },
});

export default UserRegisterationSlice.reducer;
