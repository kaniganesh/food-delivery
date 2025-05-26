import express from 'express';
import { addFood, listFood, removeFood } from '../controllers/foodController.js';
import upload from '../middleware/multer.js';
import authMiddleware from '../middleware/auth.js';

const foodRouter = express.Router();

// Public route to list all foods
foodRouter.get('/', listFood);

// Protected routes to add and remove food
foodRouter.post('/', authMiddleware, upload.single('image'), addFood);
foodRouter.delete('/:id', authMiddleware, removeFood);

export default foodRouter;
