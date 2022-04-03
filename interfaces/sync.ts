import { IHaveId } from './i-have-id'

export interface Sync extends IHaveId {
  status: string
  progress: string
  task: number
  totalTasks: number
  employees: number
  created: number
  updated: number
  skipped: number
  start: Date
  end: Date
  resumed: { type: [Date]; default: [] }
  execution: { type: string }
}
