<<<<<<< HEAD
import { provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection
} from '@angular/core';
=======
import { ApplicationConfig } from '@angular/core';
>>>>>>> leonardo
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; 
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
<<<<<<< HEAD
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient()
=======
    provideRouter(routes),
    provideHttpClient() 
>>>>>>> leonardo
  ]
};