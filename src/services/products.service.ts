import { Product } from '../interfaces/products';
import * as productModel from '../models/products.model';

export async function createProd(product: Product) {
  const data = await productModel.createProd(product.name, product.amount);
  return { status: 201, data, error: null };
}

export async function getAll() {
  const data = await productModel.getAll();
  return { status: 200, data, error: null };
}
