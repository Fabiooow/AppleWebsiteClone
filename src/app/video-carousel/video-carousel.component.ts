import { Component , OnInit, ViewChild } from '@angular/core';
import { HightlightSlide } from '../hightlight-slide'
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap-trial'

@Component({
  selector: 'app-video-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-carousel.component.html',
  styleUrl: './video-carousel.component.css'
})
export class VideoCarouselComponent {

  @ViewChild('actionBtn') actionBtn: any;

  videosMetaData:any[] = [];

  videoIndexNumber: number = 0;

  videoProgress: number = 0;

  isPlaying: boolean = false;

  actionBtnIcon: string = '/images/play.svg';

  finished: boolean = false;

  hightlightsSlides: HightlightSlide[] = [
    {
      id: 1,
      textLists: [
        "Enter A17 Pro.",
        "Game‑changing chip.",
        "Groundbreaking performance.",
      ],
      videoPath: '/videos/highlight-first.mp4',
      videoDuration: 4,
    },
    {
      id: 2,
      textLists: ["Titanium.", "So strong. So light. So Pro."],
      videoPath: '/videos/hightlight-third.mp4',
      videoDuration: 5,
    },
    {
      id: 3,
      textLists: [
        "iPhone 15 Pro Max has the",
        "longest optical zoom in",
        "iPhone ever. Far out.",
      ],
      videoPath: '/videos/hightlight-sec.mp4',
      videoDuration: 2,
    },
    {
      id: 4,
      textLists: ["All-new Action button.", "What will yours do?."],
      videoPath: '/videos/hightlight-fourth.mp4',
      videoDuration: 3.63,
    },
  ];

  gsapSetup(){
    gsap.to('#slider', {
      x: -1450 * this.videoIndexNumber
    })
  }

  endedVideo(){
    console.log("Ended")
    this.nextVideo()

  }

  loadMetaData(event: any, video: any, index:number){
    this.videosMetaData[video.id] = video;
    console.log(this.videosMetaData.length)

    if(this.videosMetaData.length == 4){
      this.resume();
    }
  }

  timeUpdate(event: any, video:any, index:number){
    if(this.videosMetaData.length == 4){
      this.videoProgress = (video.currentTime / video.duration) * 100;
      console.log(this.videoProgress)
    }
  }

  getIcon(){
    if(this.finished){
      this.actionBtnIcon = '/images/replay.svg'
    }else{
      if(this.isPlaying){
        this.actionBtnIcon = '/images/pause.svg';
      }else{
        this.actionBtnIcon = '/images/play.svg'
      }
    }
  }

  videoCarouselActionBtn(){
    console.log("OLa1")
    if(this.finished){
      this.restart()
    }else{
      if(this.isPlaying){
        this.pause()
      }else{
        this.resume()
      }
    }
    this.getIcon()

  }

  goToVideo(videoIndex: number){

    if(this.isPlaying){
      this.pause();
    }

    if(!this.finished){
      this.resetVideo()
    }
    this.videoIndexNumber = videoIndex;
    this.resume()
  }


  pause(){
    this.videosMetaData[this.videoIndexNumber].pause();
    this.isPlaying = false;
    this.getIcon();
  }

  resume(){
    if(this.videoIndexNumber < this.videosMetaData.length){
      this.videosMetaData[this.videoIndexNumber].play();
      this.isPlaying = true;
      this.finished = false;
      this.gsapSetup()
    }else{
      this.isPlaying = false;
      this.finished = true
    }
    this.getIcon()
  }

  restart(){
    this.videoIndexNumber = 0;
    this.resetVideo();
    this.resume()
  }

  resetVideo(){
    this.videosMetaData[this.videoIndexNumber].currentTime = 0.0;
  }

  nextVideo(){
    this.videoIndexNumber++;
    this.resume();
  }



}
