const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const STATUS = require('../modules/kronos/kronos-sync-status');

const SyncSchema = {
  status: {
    type: String,
    required: true,
    enum: [
      STATUS.COMPLETE,
      STATUS.FAILED,
      STATUS.READY,
      STATUS.STARTING,
      STATUS.STOPPED,
      STATUS.SYNCING,
    ],
    default: STATUS.READY,
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
};

module.exports = mongoose.model('Sync', new Schema(SyncSchema));
