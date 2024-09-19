export interface Product {
  id: string;
  img: string;
  title: string;
  price: number;
  rate: number;
}

export interface CartProduct extends Product {
  count: number;
}
