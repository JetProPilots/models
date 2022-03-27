export interface Sync {
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
