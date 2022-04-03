import { Schema, model } from 'mongoose'
import { CrewRequest } from '../interfaces/crew-request'

const schema = new Schema<CrewRequest>({
  legs: {
    required: true,
    type: [],
  },
  client: {
    required: true,
    type: Schema.Types.Mixed,
  },
  aircraft: {
    required: true,
    type: Schema.Types.Mixed,
  },
  crew_needed: {
    required: true,
    type: Boolean,
  },
  itinerary_international: {
    required: false,
    default: false,
    type: Boolean,
  },
  additional_notes: {
    required: false,
    type: String,
  },
  assigned: {
    required: false,
    type: [],
  },
  revision: {
    type: Number,
    required: true,
    default: 1,
  },
})

const CrewRequestModel = model<CrewRequest>('CrewRequest', schema)
export { CrewRequestModel }
