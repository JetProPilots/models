import { IHaveId } from './i-have-id'
export interface Aircraft extends IHaveId {
  make: string
  type: string
  model: string
}
