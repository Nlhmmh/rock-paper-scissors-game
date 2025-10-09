import { Component, inject, OnInit } from '@angular/core'
import { CHOICES, getRandomChoice } from '../../../ts/constants'
import { CommonModule } from '@angular/common'
import { ChooseChoice } from './choose-choice/choose-choice'
import { Choices } from './choices/choices'
import { Score } from '../../services/score'
import { Router, RouterLink } from '@angular/router'
import { LangChangeEvent, TranslatePipe, TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-game-box',
  imports: [CommonModule, RouterLink, ChooseChoice, Choices, TranslatePipe],
  templateUrl: './game-box.html',
  styleUrls: ['./game-box.scss']
})
export class GameBox implements OnInit {
  private scoreService = inject(Score)
  private translate = inject(TranslateService)
  currentLang = ''

  resultMsg = ''
  choice = CHOICES.UNDEFINED
  computerChoice = CHOICES.UNDEFINED

  constructor (private router: Router) {}

  ngOnInit (): void {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.updateLangs()
    })
    this.updateLangs()
  }

  private tieMsg = ''
  private loseMsg = ''
  private winMsg = ''
  private chooceYourChoiceMsg = ''
  private rock = ''
  private paper = ''
  private scissors = ''
  updateLangs () {
    this.currentLang = this.router.url.split('/')[1]
    this.winMsg = this.translate.instant('app.game-page.game-box.result.win')
    this.loseMsg = this.translate.instant('app.game-page.game-box.result.lose')
    this.tieMsg = this.translate.instant('app.game-page.game-box.result.draw')
    this.chooceYourChoiceMsg = this.translate.instant('app.game-page.game-box.choose-choice.title')
    this.rock = this.translate.instant('app.game-page.rock')
    this.paper = this.translate.instant('app.game-page.paper')
    this.scissors = this.translate.instant('app.game-page.scissors')
    this.resultMsg = this.chooceYourChoiceMsg
  }

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
    if (this.choice == CHOICES.ROCK) {
      if (this.computerChoice == CHOICES.ROCK) this.resultMsg = this.tieMsg
      else if (this.computerChoice == CHOICES.PAPER) this.resultMsg = this.loseMsg
      else if (this.computerChoice == CHOICES.SCISSORS) this.resultMsg = this.winMsg
      return
    }
    if (this.choice == CHOICES.PAPER) {
      if (this.computerChoice == CHOICES.ROCK) this.resultMsg = this.winMsg
      else if (this.computerChoice == CHOICES.PAPER) this.resultMsg = this.tieMsg
      else if (this.computerChoice == CHOICES.SCISSORS) this.resultMsg = this.loseMsg
      return
    }
    if (this.choice == CHOICES.SCISSORS) {
      if (this.computerChoice == CHOICES.ROCK) this.resultMsg = this.loseMsg
      else if (this.computerChoice == CHOICES.PAPER) this.resultMsg = this.winMsg
      else if (this.computerChoice == CHOICES.SCISSORS) this.resultMsg = this.tieMsg
      return
    }
  }

  addScore () {
    this.scoreService.addScore({
      yourChoice:
        this.choice == CHOICES.ROCK
          ? this.rock
          : this.choice == CHOICES.PAPER
          ? this.paper
          : this.scissors,
      computerChoice:
        this.computerChoice == CHOICES.ROCK
          ? this.rock
          : this.computerChoice == CHOICES.PAPER
          ? this.paper
          : this.scissors,
      result: this.resultMsg
    })
  }

  switchLang (event: Event) {
    const target = event.target as HTMLSelectElement
    const lang = target.value
    const segments = this.router.url.split('/')
    segments[1] = lang
    this.router.navigateByUrl(segments.join('/'))
  }
}
