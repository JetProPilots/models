"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoModel = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    contentType: {
        type: String,
        required: true,
    },
    data: {
        type: String,
        required: true,
    },
    lastModifiedDate: {
        type: Date,
    },
    location: {
        type: [Number],
    },
    user: {
        type: String,
        required: true,
    },
    trip: {
        type: mongoose_1.Schema.Types.ObjectId,
    },
    expense: {
        type: mongoose_1.Schema.Types.ObjectId,
    },
});
schema.path('location').index({ type: '2dsphere' });
schema.path('location').default([0, 0]);
const PhotoModel = (0, mongoose_1.model)('Photo', schema);
exports.PhotoModel = PhotoModel;
