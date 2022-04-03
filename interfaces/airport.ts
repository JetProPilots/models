import { IHaveId } from './i-have-id'

export interface Airport extends IHaveId {
  name: string
  city: string
  country: string
  IATA: string
  ICAO: string
  lat: string
  lon: string
  timezone: string
}
