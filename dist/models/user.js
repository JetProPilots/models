"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const User = mongoose_1.default.model("User", new Schema({
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
        enum: ["pending", "user", "admin"],
        default: "user",
    },
    type: {
        type: String,
        lowercase: true,
        enum: [
            "admin",
            "user",
            "attendant",
            "pending",
            "pilot",
            "tech",
            "flight engineer",
        ],
    },
    client: {
        type: String,
        required: true,
        uppercase: true,
        default: "NONE",
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
            default: "",
        },
        aircraftNnumber: {
            type: String,
            uppercase: true,
            default: "",
        },
        airport: {
            type: String,
            uppercase: true,
            default: "",
        },
        client: {
            type: String,
            uppercase: true,
            default: "NONE",
        },
    },
    employeeId: {
        type: String,
    },
    kronosKey: {
        type: Number,
    },
    employee: Schema.Types.Mixed,
}));
exports.default = User;
