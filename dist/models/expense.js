"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const Expense = mongoose_1.default.model("Expense", new Schema({
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
            "Airline",
            "Baggage",
            "Car",
            "Catering",
            "Fee",
            "Hangar Supplies",
            "Hotel",
            "Meal",
            "Other",
            "Parking",
            "Rental",
            "Taxi",
            "Taxi",
            "Uncategorized",
        ],
    },
    status: {
        type: String,
        required: true,
        enum: ["pending", "complete", "submitted", "processed", "invoiced"],
    },
    amount: {
        type: Number,
    },
    trip: Schema.Types.ObjectId,
    photos: [{ type: Schema.Types.ObjectId, ref: "Photo" }],
    tags: [String],
    note: String,
}));
exports.default = Expense;
