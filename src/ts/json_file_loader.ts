import { Injectable } from '@angular/core'
import { TranslateLoader } from '@ngx-translate/core'
import { Observable, of } from 'rxjs'
import enTranslations from '../../public/assets/i18n/en.json'
import jaTranslations from '../../public/assets/i18n/ja.json'
import myTranslations from '../../public/assets/i18n/my.json'

@Injectable()
export class JsonFileLoader implements TranslateLoader {
  private translations: { [key: string]: any } = {
    en: enTranslations,
    ja: jaTranslations,
    my: myTranslations
  }

  getTranslation (lang: string): Observable<any> {
    const translation = this.translations[lang]
    if (translation) {
      return of(translation)
    }
    return of({})
  }
}
