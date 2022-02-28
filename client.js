// app/models/client.js
// load the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define the schema for our client model
var clientSchema = new Schema({
  name: {
    type: String,
    required: true,
    uppercase: true,
  },
});

// create the model for clients and expose it to our app
module.exports = mongoose.model('Client', clientSchema);
