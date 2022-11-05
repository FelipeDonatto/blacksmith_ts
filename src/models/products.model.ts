import { ResultSetHeader } from 'mysql2';
import { IProduct, Product } from '../interfaces/products';
import connection from './connection';

export async function createProd(
  name: string,
  amount: number,
): Promise<Product> {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  const { insertId: id } = result;
  const newProduct: IProduct = { id, name, amount };
  return newProduct;
}
export async function placeholder() {
  console.log();
}
