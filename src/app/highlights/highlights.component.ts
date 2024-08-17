import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap-trial'
import { VideoCarouselComponent } from '../video-carousel/video-carousel.component'

@Component({
  selector: 'app-highlights',
  standalone: true,
  imports: [ VideoCarouselComponent ],
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.css'
})
export class HighlightsComponent implements OnInit{

  ngOnInit(){
    this.setupGsap();
  }

  setupGsap(): void{
    gsap.to('#title', {
      opacity: 1,
      delay: 1,
      y: -5
    });

    gsap.to('.link', {
      opacity: 1,
      delay: 1,
      y: 0,
      duration: 1,
      stagger: 0.25
    });
  }


}
