import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuwarComponent } from './suwar/suwar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SurahComponent } from './surah/surah.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SurahViewComponent } from './surah-view/surah-view.component';
import { ExplanationDialogComponent } from './explanation-dialog/explanation-dialog.component';
import { ErrorCatchingInterceptor } from './interceptors/error-catching.interceptor';
import {GlobalErrorHandler} from './handlers/GlobalErrorHandler';
import { NavBarButtonComponent } from './nav-bar-button/nav-bar-button.component';
import { ErrorsBlockComponent } from './errors-block/errors-block.component';
import { SurahListElementComponent } from './surah-list-element/surah-list-element.component';


@NgModule({
  declarations: [
    AppComponent,
    SuwarComponent,
    NavBarComponent,
    SurahComponent,
    AudioPlayerComponent,
    SurahViewComponent,
    ExplanationDialogComponent,
    NavBarButtonComponent,
    ErrorsBlockComponent,
    SurahListElementComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
