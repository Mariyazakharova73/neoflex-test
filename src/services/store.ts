import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productsReducer, productsState } from './slices/productsSlice';

const rootReducer = combineReducers({
	products: productsReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface StateSchema {
	products: productsState;
}
