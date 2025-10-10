import { Component, computed, effect, Input, signal, Signal } from '@angular/core'
import { CHOICES } from '../../../../ts/constants'
import { TranslatePipe } from '@ngx-translate/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-choices',
  imports: [TranslatePipe, CommonModule],
  templateUrl: 'choices.html',
  styleUrls: ['choices.scss']
})
export class Choices {
  CHOICES = CHOICES
  @Input({ required: true }) choice!: Signal<CHOICES>
  @Input({ required: true }) computerChoice!: Signal<CHOICES>
  isAnimating = signal(false)

  constructor () {
    effect(() => {
      this.choice()
      this.computerChoice()
      this.isAnimating.set(true)
      setTimeout(() => this.isAnimating.set(false), 400)
    })
  }
}
