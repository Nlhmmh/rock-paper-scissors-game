import { Component, Input } from '@angular/core'
import { CHOICES } from '../../../../ts/constants'

@Component({
  selector: 'app-choices',
  imports: [],
  templateUrl: 'choices.html',
  styleUrls: ['choices.scss'],
})
export class Choices {
  @Input({ required: true }) choice!: CHOICES
  @Input({ required: true }) computerChoice!: CHOICES
  CHOICES = CHOICES
}
