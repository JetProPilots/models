import { SyncInfoLog } from '../interfaces/sync-info-log'
import { model, Schema } from 'mongoose'

const schema = new Schema<SyncInfoLog>({
  syncId: { type: String, required: true },
  log: { type: String, required: true },
  ts: { type: Date, required: true, default: Date.now },
  params: { type: [Schema.Types.Mixed] },
})

schema.index({ syncId: 1, ts: 1 })
const SyncInfoLogModel = model<SyncInfoLog>('SyncInfoLog', schema)

export { SyncInfoLogModel }
