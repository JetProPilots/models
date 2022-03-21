import mongoose from "mongoose";
const Schema = mongoose.Schema;

const SyncInfoLog = mongoose.model(
  "SyncInfoLog",
  new Schema({
    syncId: { type: String, required: true },
    log: { type: String, required: true },
    ts: { type: Date, required: true, default: Date.now },
    params: { type: [Schema.Types.Mixed] },
  })
);

export default SyncInfoLog;
