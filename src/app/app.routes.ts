import { Routes } from '@angular/router'
import { GamePage } from './game-page/game-page'
import { ScorePage } from './score-page/score-page'
import { LangGuard } from '../ts/lang_guards'
import { WelcomePage } from './welcome-page/welcome-page'

export const routes: Routes = [
  {
    path: ':lang',
    component: WelcomePage,
    canActivate: [LangGuard],
    data: { animation: 'WelcomePage' }
  },
  {
    path: ':lang/game',
    component: GamePage,
    data: { animation: 'GamePage' }
  },
  { path: ':lang/score', component: ScorePage, data: { animation: 'ScorePage' } },
  { path: '', redirectTo: 'en', pathMatch: 'full' },
  { path: '**', redirectTo: 'en' }
]
