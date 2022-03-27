"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncModel = void 0;
const mongoose_1 = require("mongoose");
const sync_status_1 = require("../interfaces/sync-status");
const schema = new mongoose_1.Schema({
    status: {
        type: String,
        required: true,
        enum: [
            sync_status_1.SYNC_STATUS.COMPLETE,
            sync_status_1.SYNC_STATUS.FAILED,
            sync_status_1.SYNC_STATUS.READY,
            sync_status_1.SYNC_STATUS.STARTING,
            sync_status_1.SYNC_STATUS.STOPPED,
            sync_status_1.SYNC_STATUS.SYNCING,
        ],
        default: sync_status_1.SYNC_STATUS.READY,
    },
    progress: { type: String, default: '0' },
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
});
const SyncModel = (0, mongoose_1.model)('Sync', schema);
exports.SyncModel = SyncModel;
