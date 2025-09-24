import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { TUser } from "@utils/types";

export const registerUser = createAsyncThunk("registerUser", async () => {});
export const loginUser = createAsyncThunk("loginUser", async () => {});
export const logoutUser = createAsyncThunk("logoutUser", async () => {});

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
    builder
      .addCase(registerUser.pending, (state, action) => {})
      .addCase(registerUser.fulfilled, (state, action) => {})
      .addCase(registerUser.rejected, (state, action) => {})
      .addCase(loginUser.pending, (state, action) => {})
      .addCase(loginUser.fulfilled, (state, action) => {})
      .addCase(loginUser.rejected, (state, action) => {})
      .addCase(logoutUser.pending, (state, action) => {})
      .addCase(logoutUser.fulfilled, (state, action) => {})
      .addCase(logoutUser.rejected, (state, action) => {});
  },
});

export default userSlice;
