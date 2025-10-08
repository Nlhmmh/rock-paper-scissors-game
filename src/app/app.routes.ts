import { Routes } from '@angular/router';
import { GamePage } from './game-page/game-page';
import { ScorePage } from './score-page/score-page';

export const routes: Routes = [
  {
    path: "",
    component: GamePage,
  },
  {
    path: "score",
    component: ScorePage,
  }
];
