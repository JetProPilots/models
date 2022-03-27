"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapMarkerDesignModel = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    active: {
        type: Boolean,
        required: true,
        default: false,
    },
    name: {
        type: String,
        required: true,
    },
    html: {
        type: String,
        required: true,
    },
    icons: {
        pin: {
            type: String,
            default: 'https://www.jetpropilots.com/wp-content/uploads/2020/09/Map-Pin-Rev2-Small-c.png',
        },
        card: {
            type: String,
            default: 'https://www.jetpropilots.com/wp-content/uploads/2016/10/MalePilotAvatar.png',
        },
    },
    contactLink: {
        type: String,
        default: 'https://www.jetpropilots.com/contact/',
    },
    buttonImageUrl: {
        type: String,
        default: 'https://www.jetpropilots.com/wp-content/uploads/2018/08/GetInfoButton.jpg',
    },
    width: {
        type: Number,
        default: 600,
    },
    height: {
        type: Number,
        default: 300,
    },
});
const MapMarkerDesignModel = (0, mongoose_1.model)('MapMarkerDesign', schema);
exports.MapMarkerDesignModel = MapMarkerDesignModel;
