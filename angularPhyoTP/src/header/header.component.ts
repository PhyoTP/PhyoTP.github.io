import { Component, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  router = inject(Router);
  navigateToHome() {
    this.router.navigateByUrl("/home");
  }
}
