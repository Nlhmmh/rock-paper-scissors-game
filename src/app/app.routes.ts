import { Routes } from '@angular/router'
import { GamePage } from './game-page/game-page'
import { ScorePage } from './score-page/score-page'
import { LangGuard } from '../ts/lang_guards'

export const routes: Routes = [
  { path: ':lang', component: GamePage, canActivate: [LangGuard] },
  { path: ':lang/score', component: ScorePage },
  { path: '', redirectTo: 'en', pathMatch: 'full' },
  { path: '**', redirectTo: 'en' }
]
