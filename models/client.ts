import { model, Schema } from 'mongoose'
import { Client } from '../interfaces/Client'

const schema = new Schema<Client>({
  name: {
    type: String,
    required: true,
    uppercase: true,
  },
})
// create the model for clients and expose it to our app
const ClientModel = model<Client>('Client', schema)

export { ClientModel }
