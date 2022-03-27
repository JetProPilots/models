import { SyncErrorLog } from '../interfaces/SyncErrorLog'
import { model, Schema } from 'mongoose'

const schema = new Schema<SyncErrorLog>({
  syncId: { type: String, required: true },
  message: { type: String, required: true },
  ts: { type: Date, required: true, default: Date.now },
  trace: { type: String },
  meta: { type: Schema.Types.Mixed },
})
schema.index({ syncId: 1, ts: 1 })
const SyncErrorLogModel = model<SyncErrorLog>('SyncErrorLog', schema)

export { SyncErrorLogModel }