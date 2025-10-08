import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-welcome-box',
  imports: [],
  templateUrl: './welcome-box.html',
  styleUrls: ['./welcome-box.scss']
})
export class WelcomeBox {
  @Output() onToggle = new EventEmitter()

  toggle () {
    this.onToggle.emit()
  }
}
