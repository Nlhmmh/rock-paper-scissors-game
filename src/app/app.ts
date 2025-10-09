import { Component, signal } from '@angular/core'
import { Score } from './services/score'
import { RouterOutlet, Router, ActivatedRoute } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private translate: TranslateService
  ) {
    this.translate.addLangs(['en', 'ja', 'my'])
    this.translate.setDefaultLang('en')
    this.router.events.subscribe(() => {
      const currentLang = this.router.url.split('/')[1]
      if (this.translate.getLangs().includes(currentLang)) {
        this.translate.use(currentLang)
      }
    })
  }

  switchLang (lang: string) {
    const segments = this.router.url.split('/')
    segments[1] = lang
    this.router.navigateByUrl(segments.join('/'))
  }
}
