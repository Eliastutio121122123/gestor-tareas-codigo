import { bootstrapApplication } from '@angular/platform-browser';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [...(appConfig.providers ?? []), provideIonicAngular()],
}).catch((error) => console.error(error));
