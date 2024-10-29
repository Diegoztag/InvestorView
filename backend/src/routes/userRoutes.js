'use strict';

import express from 'express';
import { createUserController } from '../controllers/userController';

const router = express.Router();

// Ruta para un nuevo usuario
router.post('/create', createUserController);

export default router;