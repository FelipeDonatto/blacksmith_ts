import { Orders } from '../interfaces/orders';
import connection from './connection';

export async function getAll(): Promise<Orders[]> {
  const [result] = await connection.execute(
    `SELECT a.id, a.userId, JSON_ARRAYAGG(b.id) as productsIds 
    FROM Trybesmith.Orders as a INNER JOIN Trybesmith.Products as b ON b.orderId = a.id 
    GROUP BY a.id ORDER BY a.id;`,
  );
  return result as Orders[];
}

export async function placeholder() {
  console.log();
}
