import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Aircraft = mongoose.model(
  'Aircraft',
  new Schema({
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
)
export default Aircraft
