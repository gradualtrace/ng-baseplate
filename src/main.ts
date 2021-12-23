import { enableProdMode, MissingTranslationStrategy, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, {
  // useJit: true,
  // defaultEncapsulation: ViewEncapsulation.Emulated,
  // providers: [],
  // missingTranslation: MissingTranslationStrategy.Warning,
  // preserveWhitespaces: false,
  // ngZone: "zone.js",
  // ngZoneEventCoalescing: false
  // ngZoneRunCoalescing: false
}).then()
  .catch(err => console.error(err));
