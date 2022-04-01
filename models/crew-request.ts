import { Schema, model } from 'mongoose'
import { CrewRequest } from '../interfaces/crew-request'

const schema = new Schema<CrewRequest>({
  legs: {
    required: true,
  },
  client: {
    required: true,
  },
  aircraft: {
    required: true,
  },
  crew_needed: {
    required: true,
  },
  itinerary_international: {
    required: false,
    default: false,
  },
  additional_notes: {
    required: false,
  },
  assigned: {
    required: false,
  },
  revision: {
    required: true,
    default: 1,
  },
})

const CrewRequestModel = model<CrewRequest>('CrewRequest', schema)
export { CrewRequestModel }
