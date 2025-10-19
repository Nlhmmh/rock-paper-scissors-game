import { Component, inject, signal } from '@angular/core'
import { Score } from './services/score'
import { RouterOutlet, Router, ActivatedRoute, ChildrenOutletContexts } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { CommonModule } from '@angular/common'
import { routeAnimations } from './animations'
import { LANG_LIST } from '../ts/constants'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: [routeAnimations]
})
export class App {
  protected activedRoute = inject(ActivatedRoute)
  private contexts = inject(ChildrenOutletContexts)
  private translate = inject(TranslateService)

  constructor () {
    this.translate.addLangs(LANG_LIST)
  }

  getRouteAnimationData () {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation']
  }
}
