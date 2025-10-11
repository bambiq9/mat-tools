import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import {
  getAssemblyUnitPartApi,
  getAssemblyUnitPartsListApi,
  getAssemblyUnitsListApi,
} from "@utils/api";
import type { TAssemblyUnit, TAssemblyUnitPart } from "@utils/types";

export const getAssemblyUnitsList = createAsyncThunk(
  "getAssmblyUnitsList",
  async () => await getAssemblyUnitsListApi(),
);

export const getAssemblyUnitPartsList = createAsyncThunk(
  "getAssemblyUnitPartsList",
  async () => await getAssemblyUnitPartsListApi(),
);

export const getAssemblyUnitPart = createAsyncThunk(
  "getAssemblyUnitPart",
  async (partId: string) => await getAssemblyUnitPartApi(partId),
);

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
  reducers: {
    setUnit: (state, action: PayloadAction<string>) => {
      const unit = state.assemblyUnitsList.find(
        (unit) => unit.id === action.payload,
      );
      if (unit) state.assemblyUnit = unit;
    },
  },
  selectors: {
    selectUnitPartsList: (state) => state.assemblyUnitPartsList,
    selectUnitPart: (state) => state.assemblyUnitPart,
    selectUnitsList: (state) => state.assemblyUnitsList,
    selectUnit: (state) => state.assemblyUnit,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAssemblyUnitsList.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(getAssemblyUnitsList.fulfilled, (state, action) => {
        state.assemblyUnitsList = action.payload;
        state.isLoading = false;
      })
      .addCase(getAssemblyUnitsList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getAssemblyUnitPartsList.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(getAssemblyUnitPartsList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.assemblyUnitPartsList = action.payload;
      })
      .addCase(getAssemblyUnitPartsList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getAssemblyUnitPart.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(getAssemblyUnitPart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.assemblyUnitPart = action.payload;
      })
      .addCase(getAssemblyUnitPart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setUnit } = assemblySlice.actions;
export const {
  selectUnitPartsList,
  selectUnitPart,
  selectUnit,
  selectUnitsList,
} = assemblySlice.selectors;
export default assemblySlice;
