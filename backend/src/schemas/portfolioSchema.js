'use strict';

import Joi from 'joi';

export const createPortfolioSchema = Joi.object({
    name: Joi.string().required(),
    assets: Joi.array().items(
        Joi.object({
            type: Joi.string().valid('sstock', 'crypto').required(),
            name: Joi.string().required(),
            units: Joi.number.required(),
            investmen: Joi.number().required(),
            targetUnits: Joi.number()
        })
    )
});