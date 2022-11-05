import { Router } from 'express';
import * as userController from '../controllers/users.controllers';

const userRoute = Router();

userRoute.post('/', userController.createUser);

export default userRoute;
