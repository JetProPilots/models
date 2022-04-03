import { IHaveId } from './i-have-id'

export interface Map extends IHaveId {
  useForMarkers: boolean
  id: string
  map_title: string
  map_width: string
  map_height: string
  map_start_lat: string
  map_start_lng: string
  map_start_location: string
  map_start_zoom: string
  default_marker: string
  type: string
  alignment: string
  directions_enabled: string
  styling_enabled: string
  styling_json: string
  active: string
  kml: string
  bicycle: string
  traffic: string
  dbox: string
  dbox_width: string
  listmarkers: string
  listmarkers_advanced: string
  filterbycat: string
  ugm_enabled: string
  ugm_category_enabled: string
  fusion: string
  map_width_type: string
  map_height_type: string
  mass_marker_support: string
  ugm_access: string
  order_markers_by: string
  order_markers_choice: string
  show_user_location: string
  default_to: string
  other_settings: string
}
