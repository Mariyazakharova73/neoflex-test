import { createSlice } from '@reduxjs/toolkit';

export interface productsState {
	products: any;
}

const initialState: productsState = {
	products: [],
};

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
});

export const { actions: productsActions } = productsSlice;
export const { reducer: productsReducer } = productsSlice;
