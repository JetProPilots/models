export type TripStatus = 'open' | 'submitted' | 'processed' | 'invoiced'

export const CLIENT_DEFAULT = 'NONE'
export const TRIP_STATUS = {
  OPEN: 'open',
  SUBMITTED: 'submitted',
  PROCESSED: 'processed',
  INVOICED: 'invoiced',
}

export interface Trip {
  tripId: string
  name: string
  client: string
  user: {
    id: string
    email: string
  }
  aircraft_Nnumber: string
  aircraftType: string
  itinerary: string[]
  startDate: Date
  endDate: Date
  status: TripStatus
  rate: number
  travelRate: number
  travelBillRate: number
  memo: string
  uMemo: string
  pMemo: string
  billingRate: number
  travelDates: Date[]
  submissionDate: Date
  reviewDate: Date
  expenses: string[]
  photos: string[]
  totalExpenses: number
  tripDayCount: number
  travelDayCount: number
  totalDayCount: number
  billingRateAmount: number
  dailyRateAmount: number
  tripRateAmount: number
  travelRateAmount: number
  travelBillAmount: number
  totalRateAmount: number
  grandTotal: number
  bGrandTotal: number
}
