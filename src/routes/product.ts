import { Router } from 'express';
import * as productController from '../controllers/products.controller';

const productRoute = Router();

productRoute.post('/', productController.createProd);

export default productRoute;
