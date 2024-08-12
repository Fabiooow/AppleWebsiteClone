import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';

let imports = [
  RouterOutlet,
  NavbarComponent,
  HeroComponent
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [imports],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppleWebsiteClone';
}


