import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WelcomeBox } from '../components/welcome-box/welcome-box'
import { GameBox } from '../components/game-box/game-box'

@Component({
  selector: 'app-game-page',
  imports: [CommonModule, WelcomeBox, GameBox],
  templateUrl: './game-page.html'
})
export class GamePage {
  isSliding = false

  toggle () {
    this.isSliding = !this.isSliding
  }
}
