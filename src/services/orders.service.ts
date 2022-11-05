import * as ordersModel from '../models/orders.model';

export async function getAll() {
  const data = await ordersModel.getAll();
  return { status: 200, data, error: null };
}

export async function placeholder() {
  console.log();
}
