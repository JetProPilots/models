import { model, Schema } from 'mongoose'
import { Trip, TRIP_STATUS, CLIENT_DEFAULT } from '../interfaces/trip'

const schema = new Schema<Trip>({
  tripId: {
    type: String,
    required: false,
    uppercase: true,
    max: 10,
  },
  name: {
    type: String,
    required: true,
  },
  client: {
    type: String,
    required: true,
    uppercase: true,
    default: CLIENT_DEFAULT,
  },
  user: {
    id: String,
    email: String,
  },

  aircraft_Nnumber: {
    type: String,
    required: true,
    uppercase: true,
    trim: true,
  },

  aircraftType: {
    type: String,
    required: true,
    uppercase: true,
    trim: true,
  },
  itinerary: [
    {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
    },
  ],

  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: [
      TRIP_STATUS.OPEN,
      TRIP_STATUS.SUBMITTED,
      TRIP_STATUS.PROCESSED,
      TRIP_STATUS.INVOICED,
    ],
  },
  rate: {
    type: Number,
    min: 0,
    required: true,
  },
  travelRate: {
    type: Number,
    min: 0,
    default: 0,
  },
  travelBillRate: {
    type: Number,
    min: 0,
    default: 0,
  },
  memo: String,
  uMemo: String,
  pMemo: String,
  billingRate: Number,
  travelDates: [Date],
  submissionDate: Date,
  reviewDate: Date,
  expenses: [Schema.Types.ObjectId],
  photos: [Schema.Types.ObjectId],
  totalExpenses: Number,
  tripDayCount: Number,
  travelDayCount: Number,
  totalDayCount: Number,
  billingRateAmount: Number,
  dailyRateAmount: Number,
  tripRateAmount: Number,
  travelRateAmount: Number,
  travelBillAmount: Number,
  totalRateAmount: Number,
  grandTotal: Number,
  bGrandTotal: Number,
})

const TripModel = model<Trip>('Trip', schema)

export { TripModel }
