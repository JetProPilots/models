import { IHaveId } from './i-have-id'

export interface MapMarkerDesign extends IHaveId {
  name: string
  active: boolean
  html: string
  icons: {
    pin: string
    card: string
  }
  contactLink: string
  buttonImageUrl: string
  width: number
  height: number
}
