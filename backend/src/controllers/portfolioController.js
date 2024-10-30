'use strict';

import Portfolio from '../models/Portfolio.js';
import { createPortfolio } from '../services/portfolioService.js';
import { createPortfolioShema } from '../schemas/portfolioSchema.js';
import { calculatePortfolioIndicators } from '../services/portfolioService.js';

// Controlador para creat un nuevo portafolio
export const createPortfolioController = async (req, res) => {
    try {
        // Validamos datos del portafolio con joi
        const { error, value } = createPortfolioShema.validate(req.body);

        if (error) return res.status(400).json({ message: error.details[0].message });

        // Crear el portafolio llamado al servicio correspondiente
        const newPortfolio = await createPortfolio(value);
        return res.status(201).json(newPortfolio);
    } catch (err) {
        console.error('Error creando  portafolio: ', err);
        res.status(500).json({ message: 'Error interno del servidor '});
    }
};

// Obiene el portafolio con los calculos e indicadores
export const getPortfolioWithIndicatorsController = async (req, res) => {
    try {
        const portfolioId = req.params.id;
        const portfolio = await Portfolio.findById(portfolioId);

        if(!portfolio) return res.status(404).json({ message: 'Portafolio no encontrado' });
    } catch (error) {
        console.error('Error al obtener el portafolio', error);
        res.status(500).json({ message: 'Error interno del servidor '})
    }
}

