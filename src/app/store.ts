import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import cartReducer from "./slices/cartSlice";
import localDBReducer from "./slices/localDBSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    localDB: localDBReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
