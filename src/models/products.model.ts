import { ResultSetHeader } from 'mysql2';
import { IProduct, Product, ProductArr } from '../interfaces/products';
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
export async function getAll(): Promise<ProductArr[]> {
  const [result] = await connection.execute(
    'SELECT * FROM Trybesmith.Products;',
  );
  return result as ProductArr[];
}
