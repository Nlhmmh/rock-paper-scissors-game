import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection
} from '@angular/core'
import { provideRouter, withViewTransitions } from '@angular/router'
import { routes } from './app.routes'
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideTranslateService, provideTranslateLoader } from '@ngx-translate/core'
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader'
import { provideHttpClient } from '@angular/common/http'
import { JsonFileLoader } from '../ts/json_file_loader'

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    provideTranslateService({
      // loader: provideTranslateHttpLoader({
      //   prefix: '/assets/i18n/',
      //   suffix: '.json'
      // }),
      loader: provideTranslateLoader(JsonFileLoader),
      fallbackLang: 'en',
      lang: 'en'
    })
  ]
}
