const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SyncInfoLog = {
  syncId: { type: String, required: true },
  log: { type: String, required: true },
  ts: { type: Date, required: true, default: Date.now },
  params: { type: [Schema.Types.Mixed] },
};
module.exports = mongoose.model('SyncInfoLog', new Schema(SyncInfoLog));
