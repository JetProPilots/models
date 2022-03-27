import { model, Schema } from 'mongoose'
import { Category } from '../interfaces/category'

const schema = new Schema<Category>({
  icon: {
    url: {
      type: String,
      default:
        'https://www.jetpropilots.com/wp-content/uploads/2020/08/FInal-Map-Pin-Small-c.png',
    },
    retina: { type: Boolean, default: false },
  },
  id: {
    type: String,
  },
  map_id: {
    type: String,
  },
  active: {
    type: String,
  },
  category_name: {
    type: String,
  },
  category_icon: {
    type: String,
  },
  retina: {
    type: String,
  },
  parent: {
    type: String,
  },
  priority: {
    type: String,
  },
  image: {
    type: String,
  },
})

const CategoryModel = model<Category>('Category', schema)

export { CategoryModel }
