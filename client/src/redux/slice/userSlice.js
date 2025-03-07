import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  id: null,
  name: null,
  email: null,
  avatar: null,
  role: "user",
  isAccountVerify: false,
  isAuthenticated: false,
  loginMethod: "email",
  addresses: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...state, ...action.payload, isAuthenticated: true };
    },
    addAddress: (state, action) => {
      state.addresses.push(action.payload);
    },
    removeAddress: (state, action) => {
      state.addresses = state.addresses.filter(addr => addr.id !== action.payload);
    },
    updateAddress: (state, action) => {
      state.addresses = state.addresses.map(addr =>
        addr.id === action.payload.id ? { ...addr, ...action.payload } : addr
      );
    },
    logout: () => initialState,
  },
})

export const { setUser, addAddress, updateAddress, removeAddress, logout } = userSlice.actions
export default userSlice.reducer
