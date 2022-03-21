"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const Place = mongoose_1.default.model("Place", new Schema({
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
        index: "2dsphere",
    },
}));
exports.default = Place;
