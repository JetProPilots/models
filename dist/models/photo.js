"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const Photo = mongoose_1.default.model("Photo", new Schema({
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
        index: "2dsphere",
        default: [0, 0],
    },
    user: {
        type: String,
        required: true,
    },
    trip: {
        type: Schema.Types.ObjectId,
    },
    expense: {
        type: Schema.Types.ObjectId,
    },
}));
exports.default = Photo;
