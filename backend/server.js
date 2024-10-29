'use strict';

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

import connectDB from './db.js';
import userRoutes from './src/routes/userRoutes.js';
import portfolioRoutes from './src/routes/portfolioRoutes.js';

// Cargar variables de entorno archivo .env
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Conexión a bd
connectDB();

// Middlewares
app.use(helmet()); // Mejora seguridad configurando varios headers http
app.use(morgan('dev')); // Para registrar solicitudes http en consola
app.use(express.json()); // Para convertir JSON en las solicitudes
app.use(cors()); // Para permitir peticiones entre diferentes rutas con dif puerto

app.use('/api/users', userRoutes);
app.use('/api/portfolios', portfolioRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});