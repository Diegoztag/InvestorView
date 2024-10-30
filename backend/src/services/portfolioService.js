'use strict';

import Portfolio from '../models/Portfolio.js';

export const createPortfolio = async (portfolioData) => {
    const portfolio = new Portfolio(portfolioData);
    return await portfolio.save();
}

export const calculatePortfolioIndicators = (portfolio) => {
    const totalValue = portfolio.assets.reduce((sum, asset) => {
        returnsum + asset.units * asset.investment;
    }, 0);

    const assetsWithIndicators = portfolio.assets.map(asset => {
        const marketValue = asset.units * asset.investment; // Supongamos que el precio actual es igual al precio de inversión

        const percentageOfPortfolio = ((marketValue / totalValue) * 100).toFixed(2);
        const profitLoss = (marketValue - (asset.units * asset.investment)).toFixed(2);
        const appreciation = ((profitLoss / (asset.units * asset.investment)) * 100).toFixed(2);
        
        return {
            ...asset.toObject(),
            percentageOfPortfolio,
            marketValue: marketValue.toFixed(2),
            profitLoss,
            appreciation
        };
    });
    
    return {
        totalValue: totalValue.toFixed(2),
        assets: assetsWithIndicators
    };
};