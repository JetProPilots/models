import { Address } from './address'
import { Dates } from './dates'
import { Ein } from './ein'
import { FirstScreen } from './first-screen'
import { Links } from './links'
import { NationalIDNumber } from './national-id-number'

export interface Employee {
  id: number
  employee_id: string
  username: string
  first_name: string
  last_name: string
  photo_href: string
  status: string
  primary_email: string
  secondary_email: string
  timezone: string
  locked: boolean
  force_change_password: boolean
  add_to_new_hire_export: boolean
  managed_cost_centers_enabled: boolean
  use_separate_mailing_address: boolean
  _links: Links
  first_screen: FirstScreen
  address: Address
  dates: Dates
  ein: Ein
  national_id_numbers: NationalIDNumber[]
  showOnMap: boolean
  typeRatings: string
  initials: string
}
