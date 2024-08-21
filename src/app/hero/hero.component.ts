import { AfterViewChecked, AfterViewInit, Component, ViewChild } from '@angular/core';

import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit {

  @ViewChild('section') elementView: any;

  @ViewChild('video') videoElement: any;

  public previousVideoPath: string = "";

  constructor(){}

  ngAfterViewInit(): void {
    this.videoSelector()
    this.setupGsap()
  }


  videoSelector() {
    if(this.elementView.nativeElement.offsetWidth > 640){
      if(this.previousVideoPath != "/videos/hero.mp4"){
        this.videoElement.nativeElement.src = "/videos/hero.mp4";
        this.previousVideoPath = "/videos/hero.mp4";
      }
    }else{
      if(this.previousVideoPath != "/videos/smallHero.mp4"){
        this.videoElement.nativeElement.src = "/videos/smallHero.mp4";
        this.previousVideoPath = "/videos/smallHero.mp4";
      }
    }
  }

  setupGsap(): void {
    gsap.to('#hero', {
      opacity: 1,
      duration: 2
    });

    gsap.to("#cta", {
      opacity: 1,
      delay: 1,
      y: -50
    })

  }
}
