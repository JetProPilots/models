import mongoose from "mongoose";
const Schema = mongoose.Schema;

const SyncErrorLog = mongoose.model(
  "SyncErrorLog",
  new Schema({
    syncId: { type: String, required: true },
    message: { type: String, required: true },
    ts: { type: Date, required: true, default: Date.now },
    trace: { type: String },
    meta: { type: Schema.Types.Mixed },
  })
);

export default SyncErrorLog;
