const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SyncErrorLog = {
  syncId: { type: String, required: true },
  message: { type: String, required: true },
  ts: { type: Date, required: true, default: Date.now },
  trace: { type: String },
  meta: { type: Schema.Types.Mixed },
};
module.exports = mongoose.model('SyncErrorLog', new Schema(SyncErrorLog));
