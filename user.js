// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define the schema for our user model
var userSchema = mongoose.Schema({
  gid: {
    type: String,
  },
  token: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  profile: {
    type: Schema.Types.Mixed,
    required: true,
  },
  role: {
    type: String,
    lowercase: true,
    enum: ['pending', 'user', 'admin'],
    default: 'user',
  },
  type: {
    type: String,
    lowercase: true,
    enum: ['admin', 'user', 'attendant', 'pending', 'pilot', 'tech', 'flight engineer'],
  },
  client: {
    type: String,
    required: true,
    uppercase: true,
    default: 'NONE',
  },
  lastLogin: Date,
  lastDevice: String,
  phone: String,
  textEmail: String,
  prefEmail: String,
  rate: Number,
  billerRate: Number,
  travelRate: Number,
  travelBillRate: Number,
  medicalDate: Date,
  medicalClass: {
    type: Number,
    enum: [1, 2, 3],
  },
  hasLoggedIn: {
    type: Boolean,
    default: false,
  },
  payStubs: [Schema.Types.Mixed],
  defaults: {
    aircraftType: {
      type: String,
      uppercase: true,
      default: '',
    },
    aircraftNnumber: {
      type: String,
      uppercase: true,
      default: '',
    },
    airport: {
      type: String,
      uppercase: true,
      default: '',
    },
    client: {
      type: String,
      uppercase: true,
      default: 'NONE',
    },
  },
  employeeId: {
    type: String,
  },
  kronosKey: {
    type: Number,
  },
  employee: Schema.Types.Mixed,
});

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);

/**
 * @typedef User
 * @type {object}
 * @property {string} gid
 * @property {string} token
 * @property {string} email
 * @property {string} name
 * @property {object} profile
 * @property {string} role
 * @property {string} type
 * @property {string} client
 * @property {Date} lastLogin
 * @property {string} lastDevice
 * @property {string} phone
 * @property {string} textEmail
 * @property {string} prefEmail
 * @property {string} rate
 * @property {Number} billerRate
 * @property {Number} travelRate
 * @property {Number} travelBillRate
 * @property {Date} medicalDate
 * @property {Number} medicalClass
 * @property {Boolean} hasLoggedIn
 * @property {[object]} payStubs
 * @property {object} defaults
 * @property {string} employeeId
 * @property {Number} kronosKey
 * @property {import('../models/employee').Employee} employee
 */
