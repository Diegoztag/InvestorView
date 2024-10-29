'use strict';

import express from 'express';
import { createPortfolioController } from "../controllers/portfolioController.js";

const router = express.Router();

// Ruta para crear un nuevo portafolio
router.get('/create', createPortfolioController);

export default router;
