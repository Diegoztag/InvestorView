'use strict';

import { createPortfolio } from '../services/portfolioService.js';
import { createPortfolioShema } from '../schemas/portfolioSchema.js';

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

