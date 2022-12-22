import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
//naming convention ,which file will have the class AppModule app.module.ts
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
