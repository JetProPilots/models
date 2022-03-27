import { model, Schema } from 'mongoose'
import { Place } from '../interfaces/Place'

const schema = new Schema<Place>({
  city: {
    type: String,
    required: true,
    uppercase: true,
  },
  state: {
    type: String,
    uppercase: true,
  },
  zip: {
    type: String,
    required: true,
  },
  location: {
    type: [Number],
  },
})

schema.path('location').index({ type: '2dsphere' })

const PlaceModel = model<Place>('Place', schema)

export { PlaceModel }
