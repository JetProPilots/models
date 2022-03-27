"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseModel = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        id: {
            type: String,
        },
        email: {
            type: String,
        },
    },
    date: {
        type: Date,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: [
            'Airline',
            'Baggage',
            'Car',
            'Catering',
            'Fee',
            'Hangar Supplies',
            'Hotel',
            'Meal',
            'Other',
            'Parking',
            'Rental',
            'Taxi',
            'Taxi',
            'Uncategorized',
        ],
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'complete', 'submitted', 'processed', 'invoiced'],
    },
    amount: {
        type: Number,
    },
    trip: mongoose_1.Schema.Types.ObjectId,
    photos: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Photo' }],
    tags: [String],
    note: String,
});
const ExpenseModel = (0, mongoose_1.model)('Expense', schema);
exports.ExpenseModel = ExpenseModel;
