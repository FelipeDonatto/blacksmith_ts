import express from 'express';
import orderRoute from './routes/orders';
import productRoute from './routes/product';
import userRoute from './routes/user';

const app = express();

app.use(express.json());
app.use('/products', productRoute);
app.use('/users', userRoute);
app.use('/orders', orderRoute);
export default app;
