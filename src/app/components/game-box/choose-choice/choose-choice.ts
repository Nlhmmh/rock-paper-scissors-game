import { Component, EventEmitter, Output } from '@angular/core'
import { ChoiceCard } from './choice-card/choice-card'
import { CHOICES } from '../../../../ts/constants'
import { TranslatePipe } from '@ngx-translate/core'

@Component({
  selector: 'app-choose-choice',
  imports: [ChoiceCard, TranslatePipe],
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
