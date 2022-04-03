import { IHaveId } from './i-have-id'

export interface SyncQueueMessage extends IHaveId {
  syncId: string
  employeeId: string
  timestamp: Date
  errors: string[]
}
