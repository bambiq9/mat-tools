import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAssemblyUnitsListApi } from "@utils/api";
import type { TAssemblyUnit, TAssemblyUnitPart } from "@utils/types";

export const getAssemblyUnitsList = createAsyncThunk(
  "getAssmblyUnitsList",
  async () => await getAssemblyUnitsListApi(),
);
// export const getAssemblyUnitPartsList = createAsyncThunk('getAssemblyUnitPartsList', async () =>
//   await getAssemblyUnitPartsListApi()
// );

type TAssemblyState = {
  isLoading: boolean;
  error: string | undefined;
  assemblyUnit: TAssemblyUnit | null;
  assemblyUnitsList: TAssemblyUnit[] | [];
  assemblyUnitPart: TAssemblyUnitPart | null;
  assemblyUnitPartsList: TAssemblyUnitPart[] | [];
};

const initialState: TAssemblyState = {
  isLoading: false,
  error: undefined,
  assemblyUnit: null,
  assemblyUnitsList: [],
  assemblyUnitPart: null,
  assemblyUnitPartsList: [],
};

const assemblySlice = createSlice({
  name: "assembly",
  initialState,
  reducers: {},
  selectors: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAssemblyUnitsList.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(getAssemblyUnitsList.fulfilled, (state, action) => {
        state.assemblyUnitsList = action.payload;
        console.log(action.payload);
        state.isLoading = false;
      })
      .addCase(getAssemblyUnitsList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default assemblySlice;
