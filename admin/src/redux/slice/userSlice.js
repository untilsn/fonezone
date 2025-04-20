import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: null,
  name: "",
  email: "",
  avarta: "",
  role: "admin",
  isAccountVerify: false,
  loginMethod: "email",
  address: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    addAddress: (state, action) => {
      state.address.push(action.payload);
    },
    removeAddress: (state, action) => {
      state.address = state.address.filter(
        (addr) => addr.id !== action.payload,
      );
    },
    updateAddress: (state, action) => {
      state.address = state.action.map((addr) =>
        addr.id === action.payload.id ? { ...addr, ...action.payload } : addr,
      );
    },
    logoutUser: () => initialState,
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
