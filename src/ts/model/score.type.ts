export type ScoreElement = {
  id: number
  date: Date
  yourChoice: string
  computerChoice: string
  result: string
  outcome: OUTCOME
}

export type ScoreElementOnlyNecessary = {
  yourChoice: string
  computerChoice: string
  result: string
  outcome: OUTCOME
}

export enum OUTCOME {
  UNDEFINED,
  WIN,
  LOSE,
  TIE
}
