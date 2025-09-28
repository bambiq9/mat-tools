import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  loginUserEmailApi,
  logoutUserApi,
  registerUserEmailApi,
} from "@utils/api";
import type { TRegisterData, TUser, TUserCredData } from "@utils/types";

export const registerUser = createAsyncThunk(
  "registerUser",
  async (userData: TRegisterData) => await registerUserEmailApi(userData),
);
export const loginUser = createAsyncThunk(
  "loginUser",
  async (userData: TUserCredData) => await loginUserEmailApi(userData),
);
export const logoutUser = createAsyncThunk(
  "logoutUser",
  async () => await logoutUserApi(),
);

type UserState = {
  userData: TUser | null;
  isAuth: boolean;
  isLoading: boolean;
  error: string | undefined;
};

const initialState: UserState = {
  userData: null,
  isAuth: false,
  isLoading: false,
  error: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    [registerUser, loginUser, loginUser];
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        const { id, name, email, role } = action.payload;
        state.isLoading = false;
        state.isAuth = true;
        state.userData = {
          id,
          name,
          email,
          role,
        };
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuth = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.userData = initialState.userData;
      });
  },
});

export default userSlice;
