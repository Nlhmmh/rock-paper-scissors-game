import { Injectable, signal } from '@angular/core'
import { OUTCOME, ScoreElement, ScoreElementOnlyNecessary } from '../../ts/model/score.type'

@Injectable({
  providedIn: 'root'
})
export class Score {
  scores = signal<ScoreElement[]>([
    // {
    //   id: 1,
    //   date: new Date(Date.now() - 5000000), // ~1.3 hours ago
    //   yourChoice: 'ROCK',
    //   computerChoice: 'PAPER',
    //   result: 'Computer Wins!',
    //   outcome: OUTCOME.LOSE
    // },
    // {
    //   id: 2,
    //   date: new Date(Date.now() - 3000000), // ~50 minutes ago
    //   yourChoice: 'SCISSORS',
    //   computerChoice: 'SCISSORS',
    //   result: "It's a Tie!",
    //   outcome: OUTCOME.TIE
    // },
    // {
    //   id: 3,
    //   date: new Date(Date.now() - 1200000), // ~20 minutes ago
    //   yourChoice: 'PAPER',
    //   computerChoice: 'ROCK',
    //   result: 'You Win!',
    //   outcome: OUTCOME.WIN
    // },
    // {
    //   id: 4,
    //   date: new Date(Date.now() - 60000), // ~1 minute ago
    //   yourChoice: 'ROCK',
    //   computerChoice: 'SCISSORS',
    //   result: 'You Win!',
    //   outcome: OUTCOME.WIN
    // },
    // {
    //   id: 5,
    //   date: new Date(Date.now()), // Now
    //   yourChoice: 'PAPER',
    //   computerChoice: 'PAPER',
    //   result: "It's a Tie!",
    //   outcome: OUTCOME.TIE
    // }
  ])

  addScore (score: ScoreElementOnlyNecessary) {
    this.scores.set([
      ...this.scores(),
      {
        id: this.scores().length + 1,
        date: new Date(Date.now()),
        yourChoice: score.yourChoice,
        computerChoice: score.computerChoice,
        result: score.result,
        outcome: score.outcome
      }
    ])
  }
}
