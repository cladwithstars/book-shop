import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type LocalDB = {
  modalOpen: boolean;
  appView: "home" | "cart";
};

const initialState: LocalDB = {
  modalOpen: false,
  appView: "home",
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
  },
});

export const { setAppView, setModalOpen } = localDBSlice.actions;

export const selectAppView = (state: RootState) => state.localDB.appView;
export const selectModalOpen = (state: RootState) => state.localDB.modalOpen;

export default localDBSlice.reducer;
