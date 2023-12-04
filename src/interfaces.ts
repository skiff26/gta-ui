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
