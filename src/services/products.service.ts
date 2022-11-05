import { Product } from '../interfaces/products';
import * as userModel from '../models/products.model';

export async function createProd(user: Product) {
  const data = await userModel.createProd(user.name, user.amount);
  return { status: 201, data, error: null };
}

export async function placeholder() {
  console.log();
}
