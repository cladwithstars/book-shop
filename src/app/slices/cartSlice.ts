import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

// type CartState = {

// }

const initialState: any = {
  books: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addBookToCart: (state, action) => {
      state.books.push(action.payload);
    },
    emptyCart: (state) => {
      state.books = [];
    },
  },
});

export const { addBookToCart, emptyCart } = cartSlice.actions;

export const selectCartBooks = (state: RootState) => state.cart.books;

export default cartSlice.reducer;
