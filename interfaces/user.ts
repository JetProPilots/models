import { Employee } from './employee'
import { IHaveId } from './i-have-id'

export type UserRole = 'pending' | 'user' | 'admin'

export const USER_ROLES = {
  PENDING: 'pending',
  USER: 'user',
  ADMIN: 'admin',
}

export type UserType =
  | 'admin'
  | 'user'
  | 'attendant'
  | 'pending'
  | 'pilot'
  | 'tech'
  | 'flight engineer'

export const USER_TYPES = {
  ADMIN: 'admin',
  USER: 'user',
  ATTENDANT: 'attendant',
  PENDING: 'pending',
  PILOT: 'pilot',
  TECH: 'tech',
  FLIGHT_ENGINEER: 'flight engineer',
}

export type MedicalClass = 1 | 2 | 3
export const MEDICAL_CLASSES = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
}
export interface User extends IHaveId {
  email: string
  password: {
    hash: string
    expires?: number
    reset_pin?: string
    reset_pin_expires?: number
  }
  gid: string
  token: string
  name: string
  profile: object
  role: UserRole
  type: UserType
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
  medicalClass: MedicalClass
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
