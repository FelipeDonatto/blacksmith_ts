import jwt from 'jsonwebtoken';
import { User } from '../interfaces/users';
import * as userModel from '../models/users.models';

export async function createUser(user: User) {
  const secret = process.env.JWT_SECRET as string;
  const payload = await userModel.createUser(user);
  const token = jwt.sign({ payload }, secret, {
    expiresIn: '6h',
    algorithm: 'HS256',
  });
  return { status: 201, data: { token, ...payload }, error: null };
}
export async function placeholder() {
  console.log();
}
