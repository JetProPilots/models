"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const SyncErrorLog = mongoose_1.default.model("SyncErrorLog", new Schema({
    syncId: { type: String, required: true },
    message: { type: String, required: true },
    ts: { type: Date, required: true, default: Date.now },
    trace: { type: String },
    meta: { type: Schema.Types.Mixed },
}));
exports.default = SyncErrorLog;
