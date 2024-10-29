import React, { useState, useEffect } from 'react';
import { getPortfolios } from '../services/portfolios';

const PortfolioList = () => {
    const [portfolios, setPortfolios] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const portfoliosList = async () => {
            try {
                const data = await getPortfolios();
                setPortfolios(data.slice(0,5));
            } catch (error) {
                setError('Error al obtener portafolios')
            }
        }
        portfoliosList();
    }, []);

    return (
        <div>
            <h1>Portafolios</h1>
            {error ? <p>{error}</p> : <p></p>}
            <ul>
                {portfolios.map((portfolio) => (
                    <li key = {portfolio.id}>
                        <h2>{portfolio.name}</h2>
                        <ul>
                            {portfolio.assets.map((asset, index) => (
                                <li key = {index}>
                                    {asset.symbol}: {asset.amount} acciones a ${asset.price}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PortfolioList;