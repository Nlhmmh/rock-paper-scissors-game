import { Component, EventEmitter, Output } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TranslatePipe } from '@ngx-translate/core'

@Component({
  selector: 'app-welcome-box',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './welcome-page.html',
  styleUrls: ['./welcome-page.scss']
})
export class WelcomePage {
  @Output() onToggle = new EventEmitter()

  toggle () {
    this.onToggle.emit()
  }
}
