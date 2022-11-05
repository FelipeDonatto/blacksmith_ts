import { Request, Response } from 'express';
import { Product } from '../interfaces/products';
import * as productService from '../services/products.service';

export async function createProd(req: Request, res: Response) {
  const product = req.body as Product;
  const { status, data, error } = await productService.createProd(product);

  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}
export async function getAll(req: Request, res: Response) {
  const { status, data, error } = await productService.getAll();

  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}
