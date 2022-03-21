"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const Map = mongoose_1.default.model("Map", new Schema({
    useForMarkers: {
        type: Boolean,
        default: false,
    },
    id: String,
    map_title: String,
    map_width: String,
    map_height: String,
    map_start_lat: String,
    map_start_lng: String,
    map_start_location: String,
    map_start_zoom: String,
    default_marker: String,
    type: String,
    alignment: String,
    directions_enabled: String,
    styling_enabled: String,
    styling_json: String,
    active: String,
    kml: String,
    bicycle: String,
    traffic: String,
    dbox: String,
    dbox_width: String,
    listmarkers: String,
    listmarkers_advanced: String,
    filterbycat: String,
    ugm_enabled: String,
    ugm_category_enabled: String,
    fusion: String,
    map_width_type: String,
    map_height_type: String,
    mass_marker_support: String,
    ugm_access: String,
    order_markers_by: String,
    order_markers_choice: String,
    show_user_location: String,
    default_to: String,
    other_settings: String,
}));
exports.default = Map;
