import { IHaveId } from './i-have-id'

export interface Category extends IHaveId {
  icon: {
    url: string
    retina: boolean
  }
  map_id: string
  active: string
  category_name: string
  category_icon: string
  retina: string
  parent: string
  priority: string
  image: string
}
