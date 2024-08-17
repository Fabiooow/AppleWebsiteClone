import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { HighlightsComponent } from './highlights/highlights.component'
import { VideoCarouselComponent } from './video-carousel/video-carousel.component'

let imports = [
  RouterOutlet,
  NavbarComponent,
  HeroComponent,
  HighlightsComponent,
  VideoCarouselComponent
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


