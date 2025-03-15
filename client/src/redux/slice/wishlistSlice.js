import { createSlice } from "@reduxjs/toolkit";


const initialState = []

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishlist: (state, action) => {
      const { id } = action.payload
      if (state.some((item) => item.id === id)) {
        state.push({ id })
      }
    },
    removeWishlist: (state, action) => {
      const { id } = action.payload
      return state.filter((item) => item.id !== id)
    },
    clearWishlist: () => []
  }
})

export const { addWishlist, removeWishlist, clearWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer