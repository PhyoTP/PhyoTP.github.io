import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
    { path: '', title: "PhyoTP's Portfolio", component: HomeComponent },
    { path: 'home', title: "Home", component: HomeComponent },
    {path: 'error', title: "404 Not Found", component: ErrorComponent},
    { path: '**', title: "404 Not Found", component: ErrorComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
