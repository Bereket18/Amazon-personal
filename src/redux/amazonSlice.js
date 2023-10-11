import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  userInfo: null,
}

export const amazonSlice = createSlice({
  name: "amazon",
  initialState,
  reducers: {

    //Add to Cart
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload)
      }
    },

    //increment decrement quantity
    incrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload)
      item.quantity++
    },
    decrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload)
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--
      }
    },

    //delete a product
    deleteItem: (state, action) => {
      state.products = state.products.filter((item) => item.id !== action.payload)
    },

    //reset the cart items
    resetCart: (state) => {
      state.products = []
    },

    //user authentication
    setUserInfo: (state, action) => {
      state.userInfo = action.payload
    },

    //user Sign Out
    userSignOut: (state) => {
      state.userInfo = null
    }
  },
});

export const { addToCart, deleteItem, resetCart, incrementQuantity, decrementQuantity, setUserInfo, userSignOut } = amazonSlice.actions;
export default amazonSlice.reducer;
