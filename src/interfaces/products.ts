export interface Product {
  name: string;
  amount: number;
}

export interface IProduct extends Product {
  id: number;
}

export interface ProductArr extends IProduct {
  orderId: number;
}
