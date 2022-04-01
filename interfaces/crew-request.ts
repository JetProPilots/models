export interface EmployeeNote {
  timestamp: Date
  note: string
  author: {
    name: string
    email: string
  }
}

export interface AssignedEmployee {
  id: string
  name: string
  email: string
  date_assigned: Date
}

export interface CrewNeeded {
  pilot_in_command_dual: boolean
  pilot_in_command_single: string
  second_in_command: string
  flight_attendant: string
  vaccine_required: string
  error?: string // holds error if at least one crew member isn't selected
}

export interface ClientInfo {
  name: string
  contact_email: string
  contact_name: string
  contact_phone: string
  trip_number: string
}

export interface CrewRequestAircraft {
  name: string
  serial_number: string
  avionics: string
  tail_number: string
}
export interface LegPhase {
  datetime: string
  airport: {
    code: string
    name: string
  }
}

export interface TripLeg {
  start: LegPhase
  end: LegPhase
}

export interface CrewRequest {
  legs: TripLeg[]
  client: ClientInfo
  aircraft: CrewRequestAircraft
  crew_needed: CrewNeeded
  itinerary_international: boolean
  additional_notes: string
  assigned: AssignedEmployee[]
  revision: number
}
