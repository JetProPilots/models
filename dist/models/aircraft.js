"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AircraftModel = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    make: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
});
const AircraftModel = (0, mongoose_1.model)('Aircraft', schema);
exports.AircraftModel = AircraftModel;
