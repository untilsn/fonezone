import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
  brand: [],
  ram: [],
  storage: [],
  color: [],
  priceRange: [0, 40000000]
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilters: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearFilters: () => {
      return {
        category: [],
        brand: [],
        ram: [],
        storage: [],
        color: [],
        priceRange: [0, 40000000]
      };
    }
  }
});

export const { updateFilters, clearFilters } = filterSlice.actions;

export default filterSlice.reducer;