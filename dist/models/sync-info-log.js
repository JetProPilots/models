"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const SyncInfoLog = mongoose_1.default.model("SyncInfoLog", new Schema({
    syncId: { type: String, required: true },
    log: { type: String, required: true },
    ts: { type: Date, required: true, default: Date.now },
    params: { type: [Schema.Types.Mixed] },
}));
exports.default = SyncInfoLog;
