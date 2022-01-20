import express from 'express';
import { UserController } from '../controllers/userController';

const router = express.Router();

const userController = new UserController()

router
  .post('/users', userController.store)
  

export default router;