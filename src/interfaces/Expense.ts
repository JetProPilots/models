export interface Expense {
  name: string
  user: {
    id: string
    email: string
  }
  date: {
    type: Date
    required: true
  }
  type: string
  status: string
  amount: number
  trip: string
  photos: string[]
  tags: string[]
  note: string
}
