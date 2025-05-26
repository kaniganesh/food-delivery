import express from 'express';
import { addToCart, getCart, removeFromCart } from '../controllers/cartController.js';
import authMiddleware from '../middleware/auth.js';

const cartRouter = express.Router();

cartRouter.get('/', authMiddleware, getCart);
cartRouter.post('/', authMiddleware, addToCart);
cartRouter.delete('/:itemId', authMiddleware, removeFromCart);

export default cartRouter;
