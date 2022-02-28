// app/models/photo.js
// load the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define the schema for our photo model
var photoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    contentType: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    },
    lastModifiedDate: {
        type: Date,
    },
    location: {
        type: [Number],
        index: '2dsphere',
        default: [0, 0]
    },
    user: {
        type: String,
        required: true
    },
    trip: {
        type: Schema.Types.ObjectId,
    },

    expense: {
        type: Schema.Types.ObjectId,
    }
});

// create the model for photos and expose it to our app
module.exports = mongoose.model('Photo', photoSchema);
