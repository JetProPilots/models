"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    syncId: { type: String, required: true },
    message: { type: String, required: true },
    ts: { type: Date, required: true, default: Date.now },
    trace: { type: String },
    meta: { type: mongoose_1.Schema.Types.Mixed },
});
schema.index({ syncId: 1, ts: 1 });
const SyncErrorLogModel = (0, mongoose_1.model)('SyncErrorLog', schema);
exports.default = SyncErrorLogModel;
