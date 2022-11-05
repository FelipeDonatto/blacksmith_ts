import { Request, Response } from 'express';
import { User } from '../interfaces/users';
import * as userService from '../services/users.service';

export async function createUser(req: Request, res: Response) {
  const user = req.body as User;
  const { status, data, error } = await userService.createUser(user);

  return error
    ? res.status(status).json({ error })
    : res.status(status).json({ token: data.token });
}
export async function placeholder() {
  console.log();
}
