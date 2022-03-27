"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModel = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
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
});
const CategoryModel = (0, mongoose_1.model)('Category', schema);
exports.CategoryModel = CategoryModel;
