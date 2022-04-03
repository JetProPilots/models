import { IHaveId } from './i-have-id'

export interface SyncErrorLog extends IHaveId {
  syncId: string
  message: string
  ts: Date
  trace: string
  meta: any
}
