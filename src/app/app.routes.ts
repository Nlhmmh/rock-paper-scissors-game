import { Routes } from '@angular/router'
import { GamePage } from './game-page/game-page'
import { ScorePage } from './score-page/score-page'

export const routes: Routes = [
  { path: ':lang', component: GamePage },
  { path: ':lang/score', component: ScorePage },
  { path: '', redirectTo: 'en', pathMatch: 'full' },
  // { path: '**', redirectTo: 'en' }
]
