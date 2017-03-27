import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import  { disableDepricatedForms, provideForms } from '@angular/forms';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

enableProdMode();

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
