import axios from 'axios';

// Obtiene todos los portafolios
export const getPortfolios = async (name) => {
    try {
        const response = await axios.get('/api/portfolios');
        return response.data;
    } catch (error) {
        console.error('Error al obtener portafolios');
        throw error;
    }
};