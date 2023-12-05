export interface Tip {
  buttons: string[]
  label: string
}

export interface Server {
  name: string
  weather: {
    deg: string
    name: string
  }
  date: string
  time: string
  day: string
}

export interface Setting {
  name: string
  prefix: string
  max: number
  min: number
  value: number
}

export interface KeyDown {
  label: string
  status: boolean
  hide?: boolean
}
