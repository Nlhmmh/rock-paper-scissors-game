import { Component, EventEmitter, Output } from '@angular/core'
import { ChoiceCard } from './choice-card/choice-card'
import { CHOICES } from '../../../../ts/constants'

@Component({
  selector: 'app-choose-choice',
  imports: [ChoiceCard],
  templateUrl: './choose-choice.html',
  styleUrls: ['./choose-choice.scss']
})
export class ChooseChoice {
  @Output() choiceEvent = new EventEmitter<CHOICES>()
  CHOICES = CHOICES

  onClickChoice (choice: CHOICES) {
    this.choiceEvent.emit(choice)
  }
}
