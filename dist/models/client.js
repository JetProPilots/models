"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        uppercase: true,
    },
});
// create the model for clients and expose it to our app
const ClientModel = (0, mongoose_1.model)('Client', schema);
exports.default = ClientModel;
