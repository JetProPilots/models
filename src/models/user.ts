import { model, Schema } from 'mongoose'
const schema = new Schema({
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
    enum: [
      'admin',
      'user',
      'attendant',
      'pending',
      'pilot',
      'tech',
      'flight engineer',
    ],
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
})

const UserModel = model('User', schema)

export { UserModel }
