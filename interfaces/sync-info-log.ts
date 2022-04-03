import { IHaveId } from './i-have-id'

export interface SyncInfoLog extends IHaveId {
  syncId: string
  log: string
  ts: Date
  params: any
}
