'use strict';

import { createUser } from '../services/userServices.js';
import { createUserShema } from '../schemas/userSchema.js';

// Crear nuevo usuario
export const createUserController = async (req, res) => {
    try {
        // Validamos info del user con joi
        const { error, value } = createUserShema.validate(req.body);
        
        if (error) return res.status(400).json({ message: error.details[0].message });

        /// Crear user llamando servicio correspondiente
        const newUser = await createUser(value);
        return res.status(201).json(newUser);
    } catch (err) {
        console.log('Error creando usuario: ', err);
        res.status(500).json({ message: 'Error interno del servido' });
    }
};