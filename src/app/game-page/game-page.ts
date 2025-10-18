import { Component, effect, inject, OnInit, signal } from '@angular/core'
import { CHOICE_LOADING_TIME, CHOICES, getRandomChoice } from '../../ts/constants'
import { CommonModule } from '@angular/common'
import { Router, RouterLink } from '@angular/router'
import { LangChangeEvent, TranslatePipe, TranslateService } from '@ngx-translate/core'
import { ChooseChoice } from '../components/choose-choice/choose-choice'
import { Choices } from '../components/choices/choices'
import { SelectLang } from '../components/select-lang/select-lang'
import { Score } from '../services/score'
import { OUTCOME } from '../../ts/model/score.type'

@Component({
  selector: 'app-game-box',
  imports: [CommonModule, RouterLink, ChooseChoice, Choices, TranslatePipe, SelectLang],
  templateUrl: './game-page.html',
  styleUrls: ['./game-page.scss']
})
export class GamePage implements OnInit {
  private scoreService = inject(Score)
  private translate = inject(TranslateService)
  private router = inject(Router)

  private tieMsg = ''
  private loseMsg = ''
  private winMsg = ''
  private chooseYourChoiceMsg = ''
  private rock = ''
  private paper = ''
  private scissors = ''

  currentLang = ''
  resultMsg = ''
  currentOutcome = OUTCOME.UNDEFINED
  choice = signal<CHOICES>(CHOICES.UNDEFINED)
  computerChoice = signal<CHOICES>(CHOICES.UNDEFINED)
  isAnimating = signal(false)
  isBtnLoading = signal(false)

  ngOnInit () {
    this.updateLangs()
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.updateLangs()
    })
  }

  updateLangs () {
    this.currentLang = this.translate.getCurrentLang()
    this.winMsg = this.translate.instant('app.game-page.game-box.result.win')
    this.loseMsg = this.translate.instant('app.game-page.game-box.result.lose')
    this.tieMsg = this.translate.instant('app.game-page.game-box.result.draw')
    this.chooseYourChoiceMsg = this.translate.instant('app.game-page.game-box.choose-choice.title')
    this.rock = this.translate.instant('app.game-page.rock')
    this.paper = this.translate.instant('app.game-page.paper')
    this.scissors = this.translate.instant('app.game-page.scissors')
    this.resultMsg = this.chooseYourChoiceMsg
  }

  receiveChoice (choice: CHOICES) {
    this.playSoundEffect()
    this.choice.set(choice)
    this.computerChoice.set(getRandomChoice())
    this.isBtnLoading.set(true)
    this.isAnimating.set(true)
    setTimeout(() => {
      this.isAnimating.set(false)
      this.isBtnLoading.set(false)
    }, CHOICE_LOADING_TIME)
    this.determineWinner()
    this.setResultMsg()
    this.addScore()
  }

  determineWinner () {
    if (this.choice() == CHOICES.ROCK) {
      if (this.computerChoice() == CHOICES.ROCK) this.currentOutcome = OUTCOME.TIE
      else if (this.computerChoice() == CHOICES.PAPER) this.currentOutcome = OUTCOME.LOSE
      else if (this.computerChoice() == CHOICES.SCISSORS) this.currentOutcome = OUTCOME.WIN
      return
    }
    if (this.choice() == CHOICES.PAPER) {
      if (this.computerChoice() == CHOICES.ROCK) this.currentOutcome = OUTCOME.WIN
      else if (this.computerChoice() == CHOICES.PAPER) this.currentOutcome = OUTCOME.TIE
      else if (this.computerChoice() == CHOICES.SCISSORS) this.currentOutcome = OUTCOME.LOSE
      return
    }
    if (this.choice() == CHOICES.SCISSORS) {
      if (this.computerChoice() == CHOICES.ROCK) this.currentOutcome = OUTCOME.LOSE
      else if (this.computerChoice() == CHOICES.PAPER) this.currentOutcome = OUTCOME.WIN
      else if (this.computerChoice() == CHOICES.SCISSORS) this.currentOutcome = OUTCOME.TIE
      return
    }
  }

  setResultMsg () {
    if (this.currentOutcome == OUTCOME.WIN) this.resultMsg = this.winMsg
    if (this.currentOutcome == OUTCOME.LOSE) this.resultMsg = this.loseMsg
    if (this.currentOutcome == OUTCOME.TIE) this.resultMsg = this.tieMsg
  }

  addScore () {
    this.scoreService.addScore({
      yourChoice:
        this.choice() == CHOICES.ROCK
          ? this.rock
          : this.choice() == CHOICES.PAPER
          ? this.paper
          : this.scissors,
      computerChoice:
        this.computerChoice() == CHOICES.ROCK
          ? this.rock
          : this.computerChoice() == CHOICES.PAPER
          ? this.paper
          : this.scissors,
      result: this.resultMsg,
      outcome: this.currentOutcome
    })
  }

  playSoundEffect () {
    const audio = new Audio('assets/sounds/pop.mp3')
    audio.load()
    audio.play()
  }
}
