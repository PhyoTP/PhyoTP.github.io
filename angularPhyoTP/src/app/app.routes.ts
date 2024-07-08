import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ErrorComponent } from '../error/error.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'error', component: ErrorComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'error' }
];