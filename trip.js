/**
 * SUPER IMPORTANT NOTE:
 * If you add a new client you MUST add it to the client enum in this file.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TripSchema = new Schema({
    tripId: {
        type: String,
        required: false,
        uppercase: true,
        max: 10
    },
    name: {
        type: String,
        required: true
    },
    client: {
        type: String,
        required: true,
        uppercase: true,
        default: 'NONE'
    },
    user: {
        id: {
            type: String
        },
        email: {
            type: String
        }
    },

    aircraft_Nnumber: {
        type: String,
        required: true,
        uppercase: true,
        trim: true
    },

    aircraftType: {
        type: String,
        required: true,
        uppercase: true,
        trim: true
    },
    itinerary: [{
        type: String,
        required: true,
        uppercase: true,
        trim: true
    }],

    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['open', 'submitted', 'processed', 'invoiced']
    },
    rate: {
        type: Number,
        min: 0,
        required: true
    },
    travelRate: {
        type: Number,
        min: 0,
        default: 0
    },
    travelBillRate: {
        type: Number,
        min: 0,
        default: 0
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
    bGrandTotal: Number
});

module.exports = mongoose.model('Trip', TripSchema);