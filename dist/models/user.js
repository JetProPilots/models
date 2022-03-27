"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.Mixed,
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
    payStubs: [mongoose_1.Schema.Types.Mixed],
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
    employee: mongoose_1.Schema.Types.Mixed,
});
const UserModel = (0, mongoose_1.model)('User', schema);
exports.default = UserModel;
