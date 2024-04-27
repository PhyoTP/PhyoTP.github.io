import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from '@angular/router';
import { HomeComponent } from './app/home/home.component';
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'home', component: HomeComponent},
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
