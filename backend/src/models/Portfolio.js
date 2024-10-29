'use strict';

import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    assets: [{
        type: {
            type: String,
            enum: ['Stock', 'Crypto'],
            required: true
        },
        name: { type: String, required: true },
        units: { type: Number, required: true },
        investment: { type: Number, required: true },
        targetsUnits: { type: Number, default: 0 }
    }],
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Portfolio', portfolioSchema);