// app/models/category.js
// load the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const schema = {
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
};
module.exports = mongoose.model('Category', new Schema(schema));

/**
 * @typedef Category
 * @type {object}
 * @property {string} url
 * @property {boolean} retina
 */

/**
 * @typedef Category
 * @type {object}
 * @property {CategoryIcon} icon
  @property {string} id
  @property {string} map_id
  @property {string} active
  @property {string} category_name
  @property {string} category_icon
  @property {string} retina
  @property {string} parent
  @property {string} priority
  @property {string} image
 */
