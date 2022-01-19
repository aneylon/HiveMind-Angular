export interface Settlement {
  userId: number
  gangOwner: number
  name: string
  gangRating: number
  location: Location
  structures: Structure
  materials: Materials
}

export interface Location {
  defence: number
  resources: number
  toxicity: number
}

export interface Structure {
  supply: number
  building: number
  defence: number
}

export interface Materials {
  power: number
  sustenance: number
  salvage: number
}

export interface Building {
  name: string
  type: string
  benefits: string
  cost: string
  requirements: string
}
