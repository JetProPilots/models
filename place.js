// app/models/client.js
// load the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define the schema for our client model
var placeSchema = new Schema({
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
    index: '2dsphere',
  },
});

// create the model for Place and expose it to our app
module.exports = mongoose.model('Place', placeSchema);

/**
 * @typedef Place
 * @type {object}
 * @property {string} city
 * @property {string} state
 * @property {string} zip
 * @property {[Number]} location
 */
