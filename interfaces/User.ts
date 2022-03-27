import { Employee } from './Employee'

export interface User {
  gid: string
  token: string
  email: string
  name: string
  profile: object
  role: string
  type: string
  client: string
  lastLogin: Date
  lastDevice: string
  phone: string
  textEmail: string
  prefEmail: string
  rate: number
  billerRate: number
  travelRate: number
  travelBillRate: number
  medicalDate: Date
  medicalClass: number
  hasLoggedIn: boolean
  payStubs: object[]
  defaults: {
    aircraftType: string
    aircraftNnumber: string
    airport: string
    client: string
  }
  employeeId: string
  kronosKey: number
  employee: Employee
}
