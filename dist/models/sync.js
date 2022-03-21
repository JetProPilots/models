"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const SyncStatus_1 = require("../types/SyncStatus");
const Schema = mongoose_1.default.Schema;
const Sync = mongoose_1.default.model("Sync", new Schema({
    status: {
        type: String,
        required: true,
        enum: [
            SyncStatus_1.SYNC_STATUS.COMPLETE,
            SyncStatus_1.SYNC_STATUS.FAILED,
            SyncStatus_1.SYNC_STATUS.READY,
            SyncStatus_1.SYNC_STATUS.STARTING,
            SyncStatus_1.SYNC_STATUS.STOPPED,
            SyncStatus_1.SYNC_STATUS.SYNCING,
        ],
        default: SyncStatus_1.SYNC_STATUS.READY,
    },
    progress: { type: String, default: "0" },
    task: { type: Number, default: 0 },
    totalTasks: { type: Number, default: 0 },
    employees: { type: Number, default: 0 },
    created: { type: Number, default: 0 },
    updated: { type: Number, default: 0 },
    skipped: { type: Number, default: 0 },
    start: { type: Date },
    end: { type: Date },
    resumed: { type: [Date], default: [] },
    execution: { type: String },
}));
exports.default = Sync;
