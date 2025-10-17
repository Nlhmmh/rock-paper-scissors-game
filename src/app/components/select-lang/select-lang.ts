import { Component, inject, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { TranslatePipe, TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-select-lang',
  imports: [TranslatePipe],
  templateUrl: './select-lang.html',
  styleUrl: './select-lang.scss'
})
export class SelectLang implements OnInit {
  private translate = inject(TranslateService)
  private router = inject(Router)
  currentLang = ''

  ngOnInit () {
    this.currentLang = this.translate.getCurrentLang()
  }

  switchLang (event: Event) {
    const target = event.target as HTMLSelectElement
    const lang = target.value
    const segments = this.router.url.split('/')
    segments[1] = lang
    this.translate.use(lang);
    this.router.navigateByUrl(segments.join('/'))
  }
}
