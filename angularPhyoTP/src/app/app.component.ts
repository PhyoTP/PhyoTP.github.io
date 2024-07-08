import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ErrorComponent } from '../error/error.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, RouterModule, HomeComponent, ErrorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "PhyoTP's Portfolio";
}
