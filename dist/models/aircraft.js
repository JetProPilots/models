"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const Aircraft = mongoose_1.default.model('Aircraft', new Schema({
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
}));
exports.default = Aircraft;
