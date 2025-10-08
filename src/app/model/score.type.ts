export type ScoreElement = {
  id: number
  date: Date
  yourChoice: string
  computerChoice: string
  result: string
}

export type ScoreElementOnlyNecessary = {
  yourChoice: string
  computerChoice: string
  result: string
}