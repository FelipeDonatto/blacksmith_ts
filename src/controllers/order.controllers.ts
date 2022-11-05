import { Request, Response } from 'express';
import * as ordersService from '../services/orders.service';

export async function getAll(req: Request, res: Response) {
  const { status, data, error } = await ordersService.getAll();

  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}
export async function placeholder() {
  console.log();
}
