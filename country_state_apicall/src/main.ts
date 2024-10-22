import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import  { createCustomElement } from '@angular/elements';
import { Injector } from '@angular/core';

bootstrapApplication(AppComponent, appConfig)
.then(appRef => {
  const injector = appRef.injector;

  const webComponent = createCustomElement(AppComponent, { injector });
  
  customElements.define('city-drop', webComponent);
})
  .catch((err) => console.error(err));
