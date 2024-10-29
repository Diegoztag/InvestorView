'use strict';

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {type: String, required: true },
    email: {type: String, required: true, unique: true},
    portfolios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Portfolio' }]
});

export default mongoose.model('User', userSchema);