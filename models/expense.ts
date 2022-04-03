import { model, Schema } from 'mongoose'
import { Expense, EXPENSE_TYPES, EXPENSE_STATUS } from '../interfaces/expense'

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
      EXPENSE_TYPES.AIRLINE,
      EXPENSE_TYPES.BAGGAGE,
      EXPENSE_TYPES.CAR,
      EXPENSE_TYPES.CATERING,
      EXPENSE_TYPES.FEE,
      EXPENSE_TYPES.HANGAR_SUPPLIES,
      EXPENSE_TYPES.HOTEL,
      EXPENSE_TYPES.MEAL,
      EXPENSE_TYPES.OTHER,
      EXPENSE_TYPES.PARKING,
      EXPENSE_TYPES.RENTAL,
      EXPENSE_TYPES.TAXI,
      EXPENSE_TYPES.UNCATEGORIZED,
    ],
  },
  status: {
    type: String,
    required: true,
    enum: [
      EXPENSE_STATUS.PENDING,
      EXPENSE_STATUS.COMPLETE,
      EXPENSE_STATUS.SUBMITTED,
      EXPENSE_STATUS.PROCESSED,
      EXPENSE_STATUS.INVOICED,
    ],
  },
  amount: {
    type: Number,
  },
  trip: Schema.Types.ObjectId,
  photos: [{ type: Schema.Types.ObjectId, ref: 'Photo' }],
  tags: [String],
  note: String,
})
schema.virtual('id').get((x: { _id: Schema.Types.ObjectId }) => `${x._id}`)
const ExpenseModel = model<Expense>('Expense', schema)

export { ExpenseModel }
