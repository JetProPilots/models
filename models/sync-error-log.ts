import { SyncErrorLog } from '../interfaces/sync-error-log'
import { model, Schema } from 'mongoose'

const schema = new Schema<SyncErrorLog>({
  syncId: { type: String, required: true },
  message: { type: String, required: true },
  ts: { type: Date, required: true, default: Date.now },
  trace: { type: String },
  meta: { type: Schema.Types.Mixed },
})
schema.index({ syncId: 1 })
schema.virtual('id').get((x: { _id: Schema.Types.ObjectId }) => `${x._id}`)
const SyncErrorLogModel = model<SyncErrorLog>('SyncErrorLog', schema)

export { SyncErrorLogModel }
