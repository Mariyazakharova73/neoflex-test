import { StateSchema } from '../store';

export const selectProducts = (state: StateSchema) => state.products.products;
