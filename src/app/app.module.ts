import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VideoCarouselComponent } from './video-carousel/video-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HighlightsComponent,
    NavbarComponent,
    VideoCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
