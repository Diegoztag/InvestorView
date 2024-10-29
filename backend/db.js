'use strict';

import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conexión a MongoDB exitosa');
    } catch (error) {
        console.log('Error al conectar a MongoDB', error);
        process.exit(1);
    }
}
export default connectDB;


