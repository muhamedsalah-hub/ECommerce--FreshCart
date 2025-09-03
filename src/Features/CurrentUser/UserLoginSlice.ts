//React Redux
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Api Calls
import { Login } from "./../../cors/services/Login";

//Intefaces
import {
  IAuthUser,
  ILoginUserData,
  IUser,
} from "../../cors/InterFaces/InterFaces";

export const UserLoginApi = createAsyncThunk(
  "UserLoginApi",
  async (LoginuserData: ILoginUserData, { rejectWithValue }) => {
    try {
      const user = await Login(LoginuserData);
      localStorage.setItem("user", JSON.stringify(user.data.user));
      localStorage.setItem("token", user.data.token);
      return user.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const storedUser: string | null = localStorage.getItem("user");
const parsedUser: IUser = storedUser
  ? JSON.parse(storedUser)
  : {
      name: "",
      email: "",
      role: "",
    };

const initialState: IAuthUser = {
  message: "",
  user: parsedUser,
  token: localStorage.getItem("token") || "",
};

const UserLoginSlice = createSlice({
  name: "UserLogin",
  initialState,
  reducers: {
    signOut: (currentState) => {
      currentState.message = "";
      currentState.user = { name: "", email: "", role: "" };
      currentState.token = "";
      localStorage.clear();
    },
  },
  extraReducers(builder) {
    builder.addCase(UserLoginApi.fulfilled, (currentState, action) => {
      currentState.user = action.payload.user;
      currentState.token = action.payload.token;
    });
  },
});

export const { signOut } = UserLoginSlice.actions;

export default UserLoginSlice.reducer;
