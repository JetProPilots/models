"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncInfoLogModel = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    syncId: { type: String, required: true },
    log: { type: String, required: true },
    ts: { type: Date, required: true, default: Date.now },
    params: { type: [mongoose_1.Schema.Types.Mixed] },
});
schema.index({ syncId: 1, ts: 1 });
const SyncInfoLogModel = (0, mongoose_1.model)('SyncInfoLog', schema);
exports.SyncInfoLogModel = SyncInfoLogModel;
