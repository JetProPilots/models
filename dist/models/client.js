"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
// create the model for clients and expose it to our app
const Client = mongoose_1.default.model("Client", new Schema({
    name: {
        type: String,
        required: true,
        uppercase: true,
    },
}));
exports.default = Client;
