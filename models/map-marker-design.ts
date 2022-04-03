import { model, Schema } from 'mongoose'
import { MapMarkerDesign } from '../interfaces/map-marker-design'

const schema = new Schema<MapMarkerDesign>({
  active: {
    type: Boolean,
    required: true,
    default: false,
  },
  name: {
    type: String,
    required: true,
  },
  html: {
    type: String,
    required: true,
  },
  icons: {
    pin: {
      type: String,
      default:
        'https://www.jetpropilots.com/wp-content/uploads/2020/09/Map-Pin-Rev2-Small-c.png',
    },
    card: {
      type: String,
      default:
        'https://www.jetpropilots.com/wp-content/uploads/2016/10/MalePilotAvatar.png',
    },
  },
  contactLink: {
    type: String,
    default: 'https://www.jetpropilots.com/contact/',
  },
  buttonImageUrl: {
    type: String,
    default:
      'https://www.jetpropilots.com/wp-content/uploads/2018/08/GetInfoButton.jpg',
  },
  width: {
    type: Number,
    default: 600,
  },
  height: {
    type: Number,
    default: 300,
  },
})

const MapMarkerDesignModel = model<MapMarkerDesign>('MapMarkerDesign', schema)

export { MapMarkerDesignModel }
