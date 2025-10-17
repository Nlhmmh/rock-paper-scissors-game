import { Component, effect, inject, OnInit, signal } from '@angular/core'
import { CHOICE_LOADING_TIME, CHOICES, getRandomChoice } from '../../../ts/constants'
import { CommonModule } from '@angular/common'
import { ChooseChoice } from './choose-choice/choose-choice'
import { Choices } from './choices/choices'
import { Score } from '../../services/score'
import { Router, RouterLink } from '@angular/router'
import { LangChangeEvent, TranslatePipe, TranslateService } from '@ngx-translate/core'
import { SelectLang } from '../select-lang/select-lang'

@Component({
  selector: 'app-game-box',
  imports: [CommonModule, RouterLink, ChooseChoice, Choices, TranslatePipe, SelectLang],
  templateUrl: './game-box.html',
  styleUrls: ['./game-box.scss']
})
export class GameBox implements OnInit {
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
    this.addScore()
  }

  determineWinner () {
    if (this.choice() == CHOICES.ROCK) {
      if (this.computerChoice() == CHOICES.ROCK) this.resultMsg = this.tieMsg
      else if (this.computerChoice() == CHOICES.PAPER) this.resultMsg = this.loseMsg
      else if (this.computerChoice() == CHOICES.SCISSORS) this.resultMsg = this.winMsg
      return
    }
    if (this.choice() == CHOICES.PAPER) {
      if (this.computerChoice() == CHOICES.ROCK) this.resultMsg = this.winMsg
      else if (this.computerChoice() == CHOICES.PAPER) this.resultMsg = this.tieMsg
      else if (this.computerChoice() == CHOICES.SCISSORS) this.resultMsg = this.loseMsg
      return
    }
    if (this.choice() == CHOICES.SCISSORS) {
      if (this.computerChoice() == CHOICES.ROCK) this.resultMsg = this.loseMsg
      else if (this.computerChoice() == CHOICES.PAPER) this.resultMsg = this.winMsg
      else if (this.computerChoice() == CHOICES.SCISSORS) this.resultMsg = this.tieMsg
      return
    }
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
      result: this.resultMsg
    })
  }

  playSoundEffect () {
    const audio = new Audio('assets/sounds/pop.mp3')
    audio.load()
    audio.play()
  }
}
