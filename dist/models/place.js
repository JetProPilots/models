"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    city: {
        type: String,
        required: true,
        uppercase: true,
    },
    state: {
        type: String,
        uppercase: true,
    },
    zip: {
        type: String,
        required: true,
    },
    location: {
        type: [Number],
    },
});
schema.path('location').index({ type: '2dsphere' });
const PlaceModel = (0, mongoose_1.model)('Place', schema);
exports.default = PlaceModel;
