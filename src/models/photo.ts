import { model, Schema } from 'mongoose'
import { Photo } from '../interfaces/Photo'
const schema = new Schema<Photo>({
  name: {
    type: String,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
  lastModifiedDate: {
    type: Date,
  },
  location: {
    type: [Number],
  },
  user: {
    type: String,
    required: true,
  },
  trip: {
    type: Schema.Types.ObjectId,
  },

  expense: {
    type: Schema.Types.ObjectId,
  },
})

schema.path('location').index({ type: '2dsphere' })
schema.path('location').default([0, 0])
const PhotoModel = model<Photo>('Photo', schema)

export default PhotoModel
