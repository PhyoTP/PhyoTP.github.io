import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { ErrorComponent } from './app/error/error.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'error', component: ErrorComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'error' }
  ];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
})
    .catch(err => console.error(err));
