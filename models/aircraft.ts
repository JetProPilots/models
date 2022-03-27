import { Schema, model } from 'mongoose'
import { Aircraft } from '../interfaces/Aircraft'

const schema = new Schema<Aircraft>({
  make: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
})

const AircraftModel = model<Aircraft>('Aircraft', schema)
export default AircraftModel
