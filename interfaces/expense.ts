import { IHaveId } from './i-have-id'

export type ExpenseTypes =
  | 'Airline'
  | 'Baggage'
  | 'Car'
  | 'Catering'
  | 'Fee'
  | 'Hangar Supplies'
  | 'Hotel'
  | 'Meal'
  | 'Other'
  | 'Parking'
  | 'Rental'
  | 'Taxi'
  | 'Taxi'
  | 'Uncategorized'
export const EXPENSE_TYPES = {
  AIRLINE: 'Airline',
  BAGGAGE: 'Baggage',
  CAR: 'Car',
  CATERING: 'Catering',
  FEE: 'Fee',
  HANGAR_SUPPLIES: 'Hangar Supplies',
  HOTEL: 'Hotel',
  MEAL: 'Meal',
  OTHER: 'Other',
  PARKING: 'Parking',
  RENTAL: 'Rental',
  TAXI: 'Taxi',
  UNCATEGORIZED: 'Uncategorized',
}

export type ExpenseStatus =
  | 'pending'
  | 'complete'
  | 'submitted'
  | 'processed'
  | 'invoiced'

export const EXPENSE_STATUS = {
  PENDING: 'pending',
  COMPLETE: 'complete',
  SUBMITTED: 'submitted',
  PROCESSED: 'processed',
  INVOICED: 'invoiced',
}

export interface Expense extends IHaveId {
  name: string
  user: {
    id: string
    email: string
  }
  date: {
    type: Date
    required: true
  }
  type: ExpenseTypes
  status: ExpenseStatus
  amount: number
  trip: string
  photos: string[]
  tags: string[]
  note: string
}
