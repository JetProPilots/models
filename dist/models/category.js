"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const Category = mongoose_1.default.model('Category', new Schema({
    icon: {
        url: {
            type: String,
            default: 'https://www.jetpropilots.com/wp-content/uploads/2020/08/FInal-Map-Pin-Small-c.png',
        },
        retina: { type: Boolean, default: false },
    },
    id: {
        type: String,
    },
    map_id: {
        type: String,
    },
    active: {
        type: String,
    },
    category_name: {
        type: String,
    },
    category_icon: {
        type: String,
    },
    retina: {
        type: String,
    },
    parent: {
        type: String,
    },
    priority: {
        type: String,
    },
    image: {
        type: String,
    },
}));
exports.default = Category;
