import { Schema } from 'mongoose'
import { IHaveId } from './i-have-id'

export interface Photo extends IHaveId {
  name: string
  contentType: string
  data: string
  lastModifiedDate: Date
  location: [Schema.Types.Number]
  user: Schema.Types.ObjectId
  trip: Schema.Types.ObjectId
  expense: Schema.Types.ObjectId
}
