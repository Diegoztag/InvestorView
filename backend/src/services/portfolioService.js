'use strict';

import Portfolio from '../models/Portfolio.js';

export const createPortfolio = async (portfolioData) => {
    const portfolio = new Portfolio(portfolioData);
    return await portfolio.save();
}