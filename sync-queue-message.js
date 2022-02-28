const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SyncQueueMessage = {
  syncId: { type: String, required: true },
  employeeId: { type: String, required: true },
  timestamp: { type: Date, required: true, default: Date.now },
  status: { type: String, required: true, enum: ['new', 'ack', 'nack', 'reject', 'done'] },
  errors: [{ type: String, required: false }],
};
SyncQueueMessage.virtual('shouldRetry').get(() => {
  return this.status === 'nack' && this.errors.length < 2;
});
module.exports = mongoose.model('SyncQueueMessage', new Schema(SyncQueueMessage));
