"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
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
        default: 'NONE',
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
        enum: ['open', 'submitted', 'processed', 'invoiced'],
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
    expenses: [mongoose_1.Schema.Types.ObjectId],
    photos: [mongoose_1.Schema.Types.ObjectId],
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
});
const TripModel = (0, mongoose_1.model)('Trip', schema);
exports.default = TripModel;
