import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuwarComponent } from './suwar/suwar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SurahComponent } from './surah/surah.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { SurahViewComponent } from './surah-view/surah-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SuwarComponent,
    NavBarComponent,
    SurahComponent,
    AudioPlayerComponent,
    SurahViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
