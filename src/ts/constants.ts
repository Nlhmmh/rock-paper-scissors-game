export enum CHOICES {
  UNDEFINED,
  ROCK,
  PAPER,
  SCISSORS
}

export const getRandomChoice = (): CHOICES => {
  const validChoices = Object.values(CHOICES).filter(
    v => typeof v === 'number' && v !== CHOICES.UNDEFINED
  ) as CHOICES[]
  const randomIndex = Math.floor(Math.random() * validChoices.length)
  return validChoices[randomIndex]
}

export const CHOICE_LOADING_TIME = 500

export const LANG_LIST = ['en', 'ja', 'my']
