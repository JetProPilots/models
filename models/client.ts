import { model, Schema } from 'mongoose'
import { Client } from '../interfaces/client'

const schema = new Schema<Client>({
  name: {
    type: String,
    required: true,
    uppercase: true,
  },
})
schema.virtual('id').get((x: { _id: Schema.Types.ObjectId }) => `${x._id}`)
// create the model for clients and expose it to our app
const ClientModel = model<Client>('Client', schema)

export { ClientModel }
