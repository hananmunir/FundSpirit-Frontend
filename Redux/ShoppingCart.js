import { createSlice, configureStore } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state = [...state, action.payload];

      return state;
    },
    removeProduct: (state, action) => {
      const productId = action.payload;

      const updateState = state.filter((product) => product.id !== productId);

      return updateState;
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export { cartSlice };
