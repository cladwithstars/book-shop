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
    deleteFromCart: (state, action) => {
      state.books = state.books.filter((bk: any) => bk.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      for (let i = 0; i < state.books.length; i++) {
        if (state.books[i].id === action.payload.id) {
          state.books[i].quantity += action.payload.amount;
          return;
        }
      }
    },
  },
});

export const { addBookToCart, emptyCart, updateQuantity, deleteFromCart } =
  cartSlice.actions;

export const selectCartBooks = (state: RootState) => state.cart.books;

export default cartSlice.reducer;
