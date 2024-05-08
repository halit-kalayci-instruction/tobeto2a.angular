import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  HttpClient,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';
import { loadingInterceptor } from './interceptors/loading.interceptor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor, loadingInterceptor])),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'tr',
        useDefaultLang: true,
        loader: {
          provide: TranslateLoader,
          useFactory: (httpClient: HttpClient) => {
            return new TranslateHttpLoader(
              httpClient,
              './assets/i18n/', // ön ek    ./assets/i18n/tr.json
              '.json' // son ek
            );
          },
          deps: [HttpClient], // dependencies
        },
      })
    ),
  ],
};
