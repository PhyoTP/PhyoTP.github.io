import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { codingLangs, technologies } from '../imgbutton';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  langs = codingLangs
  techs = technologies
}
