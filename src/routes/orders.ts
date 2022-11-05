import { Router } from 'express';
import * as orderController from '../controllers/order.controllers';

const orderRoute = Router();

orderRoute.get('/', orderController.getAll);

export default orderRoute;
