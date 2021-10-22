import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

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
  },
});

export const { addBookToCart } = cartSlice.actions;

export const selectCartBooks = (state: RootState) => state.cart.books;

export default cartSlice.reducer;
