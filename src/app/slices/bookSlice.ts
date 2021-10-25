import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { db } from "../../db.js";

type SingleBook = {
  id: number | null;
  title: string | null;
  author: string | null;
  description: string | null;
  price: number | null;
};

type BooksState = {
  books: Array<SingleBook>;
};

const initialState: BooksState = {
  books: db,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    updateBooks: (state, action) => {
      state.books = action.payload;
    },
    resetBooks: (state) => {
      state.books = db;
    },
  },
});

export const { updateBooks, resetBooks } = bookSlice.actions;

export const selectBooks = (state: RootState) => state.books.books;

export default bookSlice.reducer;
