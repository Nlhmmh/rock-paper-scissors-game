import { Component, inject } from '@angular/core'
import { CHOICES, getRandomChoice } from '../../../ts/constants'
import { CommonModule } from '@angular/common'
import { ChooseChoice } from './choose-choice/choose-choice'
import { Choices } from './choices/choices'
import { Score } from '../../services/score'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-game-box',
  imports: [CommonModule, RouterLink, ChooseChoice, Choices],
  templateUrl: './game-box.html',
  styleUrls: ['./game-box.scss']
})
export class GameBox {
  private scoreService = inject(Score)

  resultMsg = 'choose your choice'
  choice = CHOICES.UNDEFINED
  computerChoice = CHOICES.UNDEFINED

  receiveChoice (choice: CHOICES) {
    this.choice = choice
    this.doComputerChoice()
    this.determineWinner()
    this.addScore()
  }

  doComputerChoice () {
    this.computerChoice = getRandomChoice()
  }

  determineWinner () {
    const tieMsg = 'It is a tie!'
    const loseMsg = 'You lose!'
    const winMsg = 'You win!'
    if (this.choice == CHOICES.ROCK) {
      if (this.computerChoice == CHOICES.ROCK) this.resultMsg = tieMsg
      else if (this.computerChoice == CHOICES.PAPER) this.resultMsg = loseMsg
      else if (this.computerChoice == CHOICES.SCISSORS) this.resultMsg = winMsg
      return
    }
    if (this.choice == CHOICES.PAPER) {
      if (this.computerChoice == CHOICES.ROCK) this.resultMsg = winMsg
      else if (this.computerChoice == CHOICES.PAPER) this.resultMsg = tieMsg
      else if (this.computerChoice == CHOICES.SCISSORS) this.resultMsg = loseMsg
      return
    }
    if (this.choice == CHOICES.SCISSORS) {
      if (this.computerChoice == CHOICES.ROCK) this.resultMsg = loseMsg
      else if (this.computerChoice == CHOICES.PAPER) this.resultMsg = winMsg
      else if (this.computerChoice == CHOICES.SCISSORS) this.resultMsg = tieMsg
      return
    }
  }

  addScore () {
    this.scoreService.addScore({
      yourChoice: CHOICES[this.choice],
      computerChoice: CHOICES[this.computerChoice],
      result: this.resultMsg
    })
  }
}
