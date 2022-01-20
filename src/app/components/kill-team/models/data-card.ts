export interface DataCard {
  typeName: string
  flavorText: string
  image: string
  movement: number
  actionPointLimit: number
  groupActivation: number
  defence: number
  save: number
  wounds: number
  weapons: Weapon[]
  abilities: Ability[]
  uniqueActions: Actions[]
}

export interface Weapon {
  name: string
  attacks: number
  ballisticWeaponSkill: number
  damage: Damage
  specialRules: string
  criticalHitRules: string
  keyWords: string
  others: string
}

export interface Damage {
  normal: number
  critical: number
}

export interface Actions {
  description: string
}

export interface Ability {
  description: string
}
