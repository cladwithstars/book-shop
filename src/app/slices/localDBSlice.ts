import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type LocalDB = {
  modalOpen: boolean;
  appView: "home" | "cart";
  priceFilter: Array<string> | null;
};

const initialState: LocalDB = {
  modalOpen: false,
  appView: "home",
  priceFilter: null,
};

export const localDBSlice = createSlice({
  name: "localDB",
  initialState,
  reducers: {
    setModalOpen: (state, action) => {
      state.modalOpen = action.payload;
    },
    setAppView: (state, action) => {
      state.appView = action.payload;
    },

    setPriceFilter: (state, action) => {
      state.priceFilter = action.payload;
    },
  },
});

export const { setAppView, setModalOpen, setPriceFilter } =
  localDBSlice.actions;

export const selectAppView = (state: RootState) => state.localDB.appView;
export const selectModalOpen = (state: RootState) => state.localDB.modalOpen;
export const selectPriceFilter = (state: RootState) =>
  state.localDB.priceFilter;

export default localDBSlice.reducer;
