'use strict';

import express from 'express';
import { createPortfolioController, getPortfolioWithIndicatorsController } from "../controllers/portfolioController.js";

const router = express.Router();

// Ruta para crear un nuevo portafolio
router.get('/create', createPortfolioController);

// Ruta para obtener un portafolio con indicadores
router.get('/:id', getPortfolioWithIndicatorsController)

export default router;
