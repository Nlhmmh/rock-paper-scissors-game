import { NgClass } from '@angular/common'
import { Component, EventEmitter, Input, Output, signal, Signal } from '@angular/core'
import { MatIcon } from '@angular/material/icon'
import { MatSpinner } from '@angular/material/progress-spinner'

@Component({
  selector: 'app-choice-card',
  imports: [NgClass, MatSpinner],
  templateUrl: './choice-card.html',
  styleUrls: ['./choice-card.scss']
})
export class ChoiceCard {
  @Input({ required: true }) choice!: string
  @Input({ required: true }) isBtnLoading: Signal<boolean> = signal(false)
  @Output() onClicked = new EventEmitter()

  onClick () {
    if (this.isBtnLoading()) return;
    this.onClicked.emit()
  }
}
