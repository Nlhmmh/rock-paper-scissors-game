import { Component, Input } from '@angular/core'
import { CHOICES } from '../../../../ts/constants'
import { TranslatePipe } from '@ngx-translate/core'

@Component({
  selector: 'app-choices',
  imports: [TranslatePipe],
  templateUrl: 'choices.html',
  styleUrls: ['choices.scss'],
})
export class Choices {
  @Input({ required: true }) choice!: CHOICES
  @Input({ required: true }) computerChoice!: CHOICES
  CHOICES = CHOICES
}
