import { model, Schema } from 'mongoose'
import { Map } from '../interfaces/map'

const schema = new Schema<Map>({
  useForMarkers: {
    type: Boolean,
    default: false,
  },
  id: String,
  map_title: String,
  map_width: String,
  map_height: String,
  map_start_lat: String,
  map_start_lng: String,
  map_start_location: String,
  map_start_zoom: String,
  default_marker: String,
  type: String,
  alignment: String,
  directions_enabled: String,
  styling_enabled: String,
  styling_json: String,
  active: String,
  kml: String,
  bicycle: String,
  traffic: String,
  dbox: String,
  dbox_width: String,
  listmarkers: String,
  listmarkers_advanced: String,
  filterbycat: String,
  ugm_enabled: String,
  ugm_category_enabled: String,
  fusion: String,
  map_width_type: String,
  map_height_type: String,
  mass_marker_support: String,
  ugm_access: String,
  order_markers_by: String,
  order_markers_choice: String,
  show_user_location: String,
  default_to: String,
  other_settings: String,
})
schema.virtual('id').get((x: { _id: Schema.Types.ObjectId }) => `${x._id}`)
const MapModel = model<Map>('Map', schema)

export { MapModel }
