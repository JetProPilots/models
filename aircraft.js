var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AircraftSchema = new Schema({
  make: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Aircraft', AircraftSchema);
