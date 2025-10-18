import { Injectable, signal } from '@angular/core'
import { ScoreElement, ScoreElementOnlyNecessary } from '../../ts/model/score.type'

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
    //   result: 'Computer Wins!'
    // },
    // {
    //   id: 2,
    //   date: new Date(Date.now() - 3000000), // ~50 minutes ago
    //   yourChoice: 'SCISSORS',
    //   computerChoice: 'SCISSORS',
    //   result: "It's a Tie!"
    // },
    // {
    //   id: 3,
    //   date: new Date(Date.now() - 1200000), // ~20 minutes ago
    //   yourChoice: 'PAPER',
    //   computerChoice: 'ROCK',
    //   result: 'You Win!'
    // },
    // {
    //   id: 4,
    //   date: new Date(Date.now() - 60000), // ~1 minute ago
    //   yourChoice: 'ROCK',
    //   computerChoice: 'SCISSORS',
    //   result: 'You Win!'
    // },
    // {
    //   id: 5,
    //   date: new Date(Date.now()), // Now
    //   yourChoice: 'PAPER',
    //   computerChoice: 'PAPER',
    //   result: "It's a Tie!"
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
        result: score.result
      }
    ])
  }
}
