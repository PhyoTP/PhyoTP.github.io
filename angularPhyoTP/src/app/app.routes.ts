import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ErrorComponent } from '../error/error.component';
import { SwiftComponent } from '../swift/swift.component';

export const routes: Routes = [
    { path: '', title: "PhyoTP's Portfolio", component: HomeComponent },
    { path: 'home', title: "PhyoTP's Portfolio", component: HomeComponent },
    { path: 'swift', title: "Swift", component: SwiftComponent },
    { path: '404', title: "404 Not Found", component: ErrorComponent },
    { path: '**', title: "404 Not Found", component: ErrorComponent },
];