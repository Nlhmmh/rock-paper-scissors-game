import { Injectable, signal } from '@angular/core'
import { ScoreElement, ScoreElementOnlyNecessary } from '../model/score.type'

@Injectable({
  providedIn: 'root'
})
export class Score {
  scores = signal<ScoreElement[]>([])

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
    console.log(this.scores())
  }
}
