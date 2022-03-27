import { model, Schema } from 'mongoose'
import { Expense } from '../../interfaces/expense'

const schema = new Schema<Expense>({
  name: {
    type: String,
    required: true,
  },
  user: {
    id: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  date: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: [
      'Airline',
      'Baggage',
      'Car',
      'Catering',
      'Fee',
      'Hangar Supplies',
      'Hotel',
      'Meal',
      'Other',
      'Parking',
      'Rental',
      'Taxi',
      'Taxi',
      'Uncategorized',
    ],
  },
  status: {
    type: String,
    required: true,
    enum: ['pending', 'complete', 'submitted', 'processed', 'invoiced'],
  },
  amount: {
    type: Number,
  },
  trip: Schema.Types.ObjectId,
  photos: [{ type: Schema.Types.ObjectId, ref: 'Photo' }],
  tags: [String],
  note: String,
})

const ExpenseModel = model<Expense>('Expense', schema)

export { ExpenseModel }
