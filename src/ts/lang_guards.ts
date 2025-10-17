import { inject, Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'

@Injectable({ providedIn: 'root' })
export class LangGuard implements CanActivate {
  private translate = inject(TranslateService)
  private router = inject(Router)

  canActivate (route: ActivatedRouteSnapshot): boolean {
    const lang = route.paramMap.get('lang')
    if (lang && this.translate.getLangs().includes(lang)) return true
    this.router.navigate(['/', this.translate.getCurrentLang()])
    return false
  }
}
