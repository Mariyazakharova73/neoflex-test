import { StateSchema } from "../store";

export const selectProducts = (state: StateSchema) => state.products.products;

export const selectCartProducts = (state: StateSchema) => state.cart.cartProducts;
