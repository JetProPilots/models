import { IHaveId } from './i-have-id'

export interface Place extends IHaveId {
  city: string
  state: string
  zip: string
  location: [number]
}
