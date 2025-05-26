import express from 'express';
import authMiddleware from '../middleware/auth.js';
import {
  listOrders,
  placeOrder,
  updateStatus,
  userOrders,
  verifyOrder,
  placeOrderCod,
} from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.get('/', authMiddleware, listOrders);        // List all orders (admin)
orderRouter.get('/user', authMiddleware, userOrders);    // Logged-in user's orders
orderRouter.post('/', authMiddleware, placeOrder);       // Place online order
orderRouter.post('/cod', authMiddleware, placeOrderCod); // Place Cash On Delivery order
orderRouter.patch('/status', authMiddleware, updateStatus);
orderRouter.post('/verify', authMiddleware, verifyOrder);

export default orderRouter;
