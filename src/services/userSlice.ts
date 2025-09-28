import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getUserApi,
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
export const getUser = createAsyncThunk(
  "getUser",
  async (userId: string) => await getUserApi(userId),
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
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuth = true;
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
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;

        if (action.payload?.user) {
          const { id, name, email, role } = action.payload.user;
          state.isAuth = true;
          state.userData = {
            id,
            name,
            email,
            role,
          };
        } else {
          state.isAuth = false;
          state.userData = initialState.userData;
        }
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice;
