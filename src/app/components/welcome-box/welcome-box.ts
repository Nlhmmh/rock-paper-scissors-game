import { Component, EventEmitter, Output } from '@angular/core'
import { TranslatePipe } from '@ngx-translate/core'

@Component({
  selector: 'app-welcome-box',
  imports: [TranslatePipe],
  templateUrl: './welcome-box.html',
  styleUrls: ['./welcome-box.scss']
})
export class WelcomeBox {
  @Output() onToggle = new EventEmitter()

  toggle () {
    this.onToggle.emit()
  }
}
