import { CartProduct } from "../types/types";

export const getTotalCount = (items: CartProduct[]) => {
  return items.reduce((sum, item) => sum + item.count, 0);
};

export const getTotalPrice = (items: CartProduct[]) => {
  return items.reduce((sum, item) => {
    return item.price * item.count + sum;
  }, 0);
};
