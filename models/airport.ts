import { Schema, model } from 'mongoose'
import { Airport } from '../interfaces/airport'

const schema = new Schema<Airport>({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  IATA: {
    type: String,
    required: true,
  },
  ICAO: {
    type: String,
    required: true,
  },
  lat: {
    type: String,
  },
  lon: {
    type: String,
  },
  timezone: {
    type: String,
  },
})

const AirportModel = model<Airport>('Airport', schema)
export { AirportModel }
