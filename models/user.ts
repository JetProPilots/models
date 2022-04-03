import { CLIENT_DEFAULT } from './../interfaces/trip'
import {
  MEDICAL_CLASSES,
  User,
  USER_ROLES,
  USER_TYPES,
} from './../interfaces/user'
import { model, Schema } from 'mongoose'

const schema = new Schema<User>({
  email: {
    type: String,
    required: true,
  },
  password: {
    hash: {
      type: String,
      required: true,
    },
    expires: {
      type: Number,
      required: false,
    },
    reset_pin: {
      type: String,
      required: false,
    },
    reset_pin_expires: {
      type: Number,
      required: false,
    },
  },
  gid: {
    type: String,
  },
  token: {
    type: String,
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
    enum: [USER_ROLES.PENDING, USER_ROLES.USER, USER_ROLES.ADMIN],
  },
  type: {
    type: String,
    lowercase: true,
    enum: [
      USER_TYPES.ADMIN,
      USER_TYPES.USER,
      USER_TYPES.ATTENDANT,
      USER_TYPES.PENDING,
      USER_TYPES.PILOT,
      USER_TYPES.TECH,
      USER_TYPES.FLIGHT_ENGINEER,
    ],
  },
  client: {
    type: String,
    required: true,
    uppercase: true,
    default: CLIENT_DEFAULT,
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
    enum: [MEDICAL_CLASSES.ONE, MEDICAL_CLASSES.TWO, MEDICAL_CLASSES.THREE],
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
      default: CLIENT_DEFAULT,
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
schema.virtual('id').get((x: { _id: Schema.Types.ObjectId }) => `${x._id}`)

schema.path('role').default(USER_ROLES.PENDING)
const UserModel = model<User>('User', schema)

export { UserModel }
