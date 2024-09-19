import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartReducer, cartState } from "./slices/cartSlice";
import { productsReducer, productsState } from "./slices/productsSlice";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface StateSchema {
  products: productsState;
  cart: cartState;
}
