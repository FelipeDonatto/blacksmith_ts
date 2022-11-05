import { ResultSetHeader } from 'mysql2';
import { IUser, User } from '../interfaces/users';
import connection from './connection';

export async function createUser(user: User): Promise<User> {
  const { username, classe, level, password } = user;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [username, classe, level, password],
  );
  const { insertId: id } = result;
  const newUser: IUser = { id, username, classe, level, password };
  return newUser;
}

export async function placeholder() {
  console.log();
}
