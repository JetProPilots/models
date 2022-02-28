// app/models/map.js
// load the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Map = {
  useForMarkers: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
  },
  map_title: {
    type: String,
  },
  map_width: {
    type: String,
  },
  map_height: {
    type: String,
  },
  map_start_lat: {
    type: String,
  },
  map_start_lng: {
    type: String,
  },
  map_start_location: {
    type: String,
  },
  map_start_zoom: {
    type: String,
  },
  default_marker: {
    type: String,
  },
  type: {
    type: String,
  },
  alignment: {
    type: String,
  },
  directions_enabled: {
    type: String,
  },
  styling_enabled: {
    type: String,
  },
  styling_json: {
    type: String,
  },
  active: {
    type: String,
  },
  kml: {
    type: String,
  },
  bicycle: {
    type: String,
  },
  traffic: {
    type: String,
  },
  dbox: {
    type: String,
  },
  dbox_width: {
    type: String,
  },
  listmarkers: {
    type: String,
  },
  listmarkers_advanced: {
    type: String,
  },
  filterbycat: {
    type: String,
  },
  ugm_enabled: {
    type: String,
  },
  ugm_category_enabled: {
    type: String,
  },
  fusion: {
    type: String,
  },
  map_width_type: {
    type: String,
  },
  map_height_type: {
    type: String,
  },
  mass_marker_support: {
    type: String,
  },
  ugm_access: {
    type: String,
  },
  order_markers_by: {
    type: String,
  },
  order_markers_choice: {
    type: String,
  },
  show_user_location: {
    type: String,
  },
  default_to: {
    type: String,
  },
  other_settings: {
    type: String,
  },
};
module.exports = mongoose.model('Map', new Schema(Map));

/**
 * @typedef Map
 * @type {object}
 * @property {boolean} useForMarkers
 * @property {string} id
 * @property {string} map_title
 * @property {string} map_width
 * @property {string} map_height
 * @property {string} map_start_lat
 * @property {string} map_start_lng
 * @property {string} map_start_location
 * @property {string} map_start_zoom
 * @property {string} default_marker
 * @property {string} type
 * @property {string} alignment
 * @property {string} directions_enabled
 * @property {string} styling_enabled
 * @property {string} styling_enabled
 * @property {string} styling_json
 * @property {string} active
 * @property {string} kml
 * @property {string} bicycle
 * @property {string} traffic
 * @property {string} dbox
 * @property {string} dbox_width
 * @property {string} listmarkers
 * @property {string} listmarkers_advanced
 * @property {string} filterbycat
 * @property {string} ugm_enabled
 * @property {string} ugm_category_enabled
 * @property {string} fusion
 * @property {string} map_width_type
 * @property {string} map_height_type
 * @property {string} mass_marker_support
 * @property {string} ugm_access
 * @property {string} order_markers_by
 * @property {string} order_markers_choice
 * @property {string} show_user_location
 * @property {string} default_to
 * @property {string} other_settings
 */
