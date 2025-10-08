import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-choice-card',
  imports: [],
  templateUrl: './choice-card.html',
  styleUrls: ['./choice-card.scss'],
})
export class ChoiceCard {
  @Input({ required: true }) choice!: string;
  @Output() onClicked = new EventEmitter();

  onClick() {
    this.onClicked.emit();
  }
}
