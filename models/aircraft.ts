import { Schema, model } from 'mongoose'
import { Aircraft } from '../interfaces/aircraft'

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

schema.virtual('id').get((x: { _id: Schema.Types.ObjectId }) => `${x._id}`)

const AircraftModel = model<Aircraft>('Aircraft', schema)
export { AircraftModel }
