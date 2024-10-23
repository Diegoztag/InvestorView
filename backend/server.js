import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';
import { router } from './src/routes.js'; //importamos rutas modularmente

// Cargar variables de entorno archivo .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares globales
app.use(helmet()); // Mejora seguridad configurando varios headers http
app.use(morgan('dev')); // Para registrar solicitudes http en consola
app.use(express.json()); // Para convertir JSON en las solicitudes

// Ruta principal
app.use('/api', router);

// Manejo de errores basicos
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal')
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});